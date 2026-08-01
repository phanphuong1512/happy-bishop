import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";

let localDevBlogs: any[] = [];

export function getLocalDevBlogs() {
  return localDevBlogs;
}

export function setLocalDevBlogs(blogs: any[]) {
  localDevBlogs = blogs;
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
      return db;
    }
  } catch (e) {
    // Running in local Next.js dev server without wrangler proxy
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
    } catch (error: any) {
      console.error("D1 Query Error:", error);
    }
  }

  // When running on localhost:3000 without local D1 binding, fetch live D1 data from production
  try {
    const prodRes = await fetch("https://happybishops.com/api/blogs", { cache: "no-store" });
    if (prodRes.ok) {
      const prodData = await prodRes.json();
      if (prodData.data && prodData.data.length > 0) {
        return NextResponse.json({ success: true, data: prodData.data, source: "production-d1-proxy" });
      }
    }
  } catch (err) {
    console.error("Error fetching live D1 fallback:", err);
  }

  return NextResponse.json({ success: true, data: localDevBlogs, source: "local" });
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

      return NextResponse.json({ success: true, message: "Đã thêm bài viết mới vào Cloudflare D1 Database!" });
    }

    const newId = localDevBlogs.length > 0 ? Math.max(...localDevBlogs.map(b => Number(b.id) || 0)) + 1 : 1;
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

    localDevBlogs.unshift(newPost);

    return NextResponse.json({ success: true, message: "Đã tạo bài viết mới!", data: newPost });
  } catch (error: any) {
    console.error("D1 Insert Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi khi thêm bài viết!" }, { status: 500 });
  }
}
