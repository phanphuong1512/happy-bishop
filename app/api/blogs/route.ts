import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { blogPosts as staticBlogPosts } from "@/app/blog/data";

// Shared memory store for local development / non-D1 environment
let memoryBlogs: any[] = [...staticBlogPosts];

export function getMemoryBlogs() {
  return memoryBlogs;
}

export function setMemoryBlogs(newBlogs: any[]) {
  memoryBlogs = newBlogs;
}

async function isAuthorized() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("hb_admin_auth");
  return authCookie?.value === "hb_authenticated_admin_session_2025";
}

async function getD1Database() {
  try {
    const { env } = await getCloudflareContext();
    const db = (env as any)?.DB;
    if (db) {
      // Ensure table exists
      await db.prepare(`
        CREATE TABLE IF NOT EXISTS blogs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          slug TEXT UNIQUE NOT NULL,
          title TEXT NOT NULL,
          date TEXT NOT NULL,
          summary TEXT NOT NULL,
          cover_image TEXT NOT NULL,
          content TEXT NOT NULL,
          recap_link_text TEXT,
          recap_link_target_slug TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
      `).run();

      // Seed initial static posts if table is empty
      const countRes: any = await db.prepare("SELECT COUNT(*) as count FROM blogs").first();
      if (countRes && countRes.count === 0) {
        for (const post of staticBlogPosts) {
          const jsonContent = JSON.stringify(post.content);
          await db.prepare(
            `INSERT OR IGNORE INTO blogs (id, slug, title, date, summary, cover_image, content, recap_link_text, recap_link_target_slug)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
          )
            .bind(
              post.id,
              post.slug,
              post.title,
              post.date,
              post.summary,
              post.coverImage,
              jsonContent,
              post.recapLink?.text || "",
              post.recapLink?.targetSlug || ""
            )
            .run();
        }
      }

      return db;
    }
  } catch (e) {
    console.error("D1 Connection error:", e);
  }
  return null;
}

export async function GET() {
  const db = await getD1Database();

  if (db) {
    try {
      const { results } = await db.prepare("SELECT * FROM blogs ORDER BY id DESC").all();
      if (results) {
        const formatted = results.map((row: any) => ({
          id: row.id,
          slug: row.slug,
          title: row.title,
          date: row.date,
          summary: row.summary,
          coverImage: row.cover_image,
          content: typeof row.content === "string" ? JSON.parse(row.content) : row.content,
          recapLink: row.recap_link_text ? {
            text: row.recap_link_text,
            targetSlug: row.recap_link_target_slug,
          } : undefined,
        }));
        return NextResponse.json({ success: true, data: formatted, source: "d1" });
      }
    } catch (err) {
      console.error("Error reading from D1:", err);
    }
  }

  return NextResponse.json({ success: true, data: memoryBlogs, source: "memory" });
}

export async function POST(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ success: false, message: "Bạn chưa đăng nhập hoặc hết phiên làm việc!" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, slug, date, summary, coverImage, content, recapLinkText, recapLinkTargetSlug } = body;

    if (!title || !slug || !summary || !coverImage || !content) {
      return NextResponse.json({ success: false, message: "Vui lòng nhập đầy đủ các trường bắt buộc (*)" }, { status: 400 });
    }

    const db = await getD1Database();
    const currentDate = date || new Date().toLocaleDateString("vi-VN");
    const jsonContent = Array.isArray(content) ? JSON.stringify(content) : JSON.stringify([content]);

    if (db) {
      await db.prepare(
        `INSERT INTO blogs (slug, title, date, summary, cover_image, content, recap_link_text, recap_link_target_slug)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          slug,
          title,
          currentDate,
          summary,
          coverImage,
          jsonContent,
          recapLinkText || "",
          recapLinkTargetSlug || ""
        )
        .run();

      return NextResponse.json({ success: true, message: "🟢 Đã ghi bài viết trực tiếp vào Cloudflare D1 Database!" });
    }

    // In-memory fallback
    const newId = memoryBlogs.length > 0 ? Math.max(...memoryBlogs.map(b => Number(b.id) || 0)) + 1 : 1;
    const newPost = {
      id: newId,
      slug,
      title,
      date: currentDate,
      summary,
      coverImage,
      content: Array.isArray(content) ? content : [content],
      recapLink: recapLinkText ? { text: recapLinkText, targetSlug: recapLinkTargetSlug } : undefined,
    };

    memoryBlogs.unshift(newPost);

    return NextResponse.json({
      success: true,
      message: "⚠️ Chưa phát hiện kết nối D1 ở môi trường local, bài viết tạm thời lưu ở bộ nhớ local. Vui lòng deploy hoặc chạy lệnh SQL trên Cloudflare Console!",
      data: newPost,
    });
  } catch (error: any) {
    console.error("Create Blog Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi khi tạo bài viết!" }, { status: 500 });
  }
}
