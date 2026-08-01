import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getMemoryBlogs, setMemoryBlogs } from "../route";

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
    console.error("D1 Connection error:", e);
  }
  return null;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const db = await getD1Database();

  if (db) {
    try {
      const row: any = await db.prepare(
        "SELECT * FROM blogs WHERE id = ? OR slug = ?"
      )
        .bind(id, id)
        .first();

      if (row) {
        const formatted = {
          id: row.id,
          slug: row.slug,
          title: row.title,
          date: row.date,
          summary: row.summary,
          coverImage: row.cover_image,
          content: typeof row.content === "string" ? JSON.parse(row.content) : row.content,
          recapLinkText: row.recap_link_text || "",
          recapLinkTargetSlug: row.recap_link_target_slug || "",
        };
        return NextResponse.json({ success: true, data: formatted });
      }
    } catch (error) {
      console.error("D1 Fetch ID Error:", error);
    }
  }

  const memoryBlogs = getMemoryBlogs();
  const found = memoryBlogs.find((p) => String(p.id) === id || p.slug === id);
  if (found) {
    return NextResponse.json({ success: true, data: found });
  }

  return NextResponse.json({ success: false, message: "Không tìm thấy bài viết" }, { status: 404 });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  try {
    const body = await request.json();
    const { title, slug, date, summary, coverImage, content, recapLinkText, recapLinkTargetSlug } = body;

    const db = await getD1Database();
    const jsonContent = Array.isArray(content) ? JSON.stringify(content) : JSON.stringify([content]);

    if (db) {
      await db.prepare(
        `UPDATE blogs
         SET title = ?, slug = ?, date = ?, summary = ?, cover_image = ?, content = ?, recap_link_text = ?, recap_link_target_slug = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ? OR slug = ?`
      )
        .bind(
          title,
          slug,
          date,
          summary,
          coverImage,
          jsonContent,
          recapLinkText || "",
          recapLinkTargetSlug || "",
          id,
          id
        )
        .run();

      return NextResponse.json({ success: true, message: "Đã cập nhật bài viết vào D1 Database!" });
    }

    // Memory fallback
    const memoryBlogs = getMemoryBlogs();
    const index = memoryBlogs.findIndex((b) => String(b.id) === id || b.slug === id);
    if (index !== -1) {
      memoryBlogs[index] = {
        ...memoryBlogs[index],
        title,
        slug,
        date,
        summary,
        coverImage,
        content: Array.isArray(content) ? content : [content],
        recapLink: recapLinkText ? { text: recapLinkText, targetSlug: recapLinkTargetSlug } : undefined,
      };
      setMemoryBlogs(memoryBlogs);
    }

    return NextResponse.json({ success: true, message: "Đã cập nhật bài viết thành công!" });
  } catch (error: any) {
    console.error("D1 Update Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi khi cập nhật bài viết!" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  try {
    const db = await getD1Database();
    if (db) {
      await db.prepare("DELETE FROM blogs WHERE id = ? OR slug = ?").bind(id, id).run();
      return NextResponse.json({ success: true, message: "Đã xóa bài viết khỏi D1 Database!" });
    }

    // Memory fallback
    const memoryBlogs = getMemoryBlogs();
    const filtered = memoryBlogs.filter((b) => String(b.id) !== id && b.slug !== id);
    setMemoryBlogs(filtered);

    return NextResponse.json({ success: true, message: "Đã xóa bài viết!" });
  } catch (error: any) {
    console.error("D1 Delete Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi khi xóa bài viết!" }, { status: 500 });
  }
}
