import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { blogPosts as staticBlogPosts, BlogPost } from "@/app/blog/data";

async function isAuthorized() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("hb_admin_auth");
  return authCookie?.value === "hb_authenticated_admin_session_2025";
}

export async function GET() {
  try {
    const { env } = await getCloudflareContext();
    const db = (env as any)?.DB;
    if (db) {
      const { results } = await db.prepare(
        "SELECT * FROM blogs ORDER BY id DESC"
      ).all();

      if (results && results.length > 0) {
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
        return NextResponse.json({ success: true, data: formatted });
      }
    }
  } catch (error) {
    console.error("D1 Fetch Error, falling back to static posts:", error);
  }

  // Fallback to static blog posts if D1 isn't initialized yet
  return NextResponse.json({ success: true, data: staticBlogPosts });
}

export async function POST(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, slug, date, summary, coverImage, content, recapLinkText, recapLinkTargetSlug } = body;

    if (!title || !slug || !summary || !coverImage || !content) {
      return NextResponse.json({ success: false, message: "Thiếu thông tin bắt buộc!" }, { status: 400 });
    }

    const { env } = await getCloudflareContext();
    const db = (env as any)?.DB;
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

      return NextResponse.json({ success: true, message: "Tạo bài viết thành công!" });
    }

    return NextResponse.json({ success: true, message: "Tạo bài viết thành công (mock)!" });
  } catch (error: any) {
    console.error("D1 Create Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi khi tạo bài viết!" }, { status: 500 });
  }
}
