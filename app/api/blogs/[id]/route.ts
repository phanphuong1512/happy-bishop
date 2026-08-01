import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";

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
    console.error("D1 Connection Error:", e);
  }
  return null;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const db = await getD1Database();

  if (!db) {
    return NextResponse.json(
      { success: false, message: "Không thể kết nối Cloudflare D1 Database!" },
      { status: 500 }
    );
  }

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

    return NextResponse.json({ success: false, message: "Không tìm thấy bài viết trong D1" }, { status: 404 });
  } catch (error: any) {
    console.error("D1 Fetch ID Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi D1 Database!" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const db = await getD1Database();

  if (!db) {
    return NextResponse.json(
      { success: false, message: "Không thể kết nối Cloudflare D1 Database!" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { title, slug, date, summary, coverImage, content, recapLinkText, recapLinkTargetSlug } = body;

    const jsonContent = Array.isArray(content) ? JSON.stringify(content) : JSON.stringify([content]);

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

    return NextResponse.json({ success: true, message: "Đã cập nhật bài viết trong Cloudflare D1 Database!" });
  } catch (error: any) {
    console.error("D1 Update Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi khi cập nhật D1 Database!" }, { status: 500 });
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
  const db = await getD1Database();

  if (!db) {
    return NextResponse.json(
      { success: false, message: "Không thể kết nối Cloudflare D1 Database!" },
      { status: 500 }
    );
  }

  try {
    await db.prepare("DELETE FROM blogs WHERE id = ? OR slug = ?").bind(id, id).run();
    return NextResponse.json({ success: true, message: "Đã xóa bài viết khỏi Cloudflare D1 Database!" });
  } catch (error: any) {
    console.error("D1 Delete Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi khi xóa khỏi D1 Database!" }, { status: 500 });
  }
}
