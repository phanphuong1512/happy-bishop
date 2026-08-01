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

export async function GET() {
  const db = await getD1Database();

  if (!db) {
    return NextResponse.json(
      { success: false, message: "Không thể kết nối Cloudflare D1 Database!" },
      { status: 500 }
    );
  }

  try {
    const { results } = await db.prepare("SELECT * FROM blogs ORDER BY id DESC").all();
    
    const formatted = (results || []).map((row: any) => ({
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

    return NextResponse.json({ success: true, data: formatted });
  } catch (error: any) {
    console.error("D1 Query Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Lỗi khi truy vấn Cloudflare D1!" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ success: false, message: "Bạn chưa đăng nhập hoặc hết phiên làm việc!" }, { status: 401 });
  }

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

    if (!title || !slug || !summary || !coverImage || !content) {
      return NextResponse.json({ success: false, message: "Vui lòng nhập đầy đủ các trường bắt buộc (*)" }, { status: 400 });
    }

    const currentDate = date || new Date().toLocaleDateString("vi-VN");
    const jsonContent = Array.isArray(content) ? JSON.stringify(content) : JSON.stringify([content]);

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
  } catch (error: any) {
    console.error("D1 Insert Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi khi thêm bài viết vào D1!" }, { status: 500 });
  }
}
