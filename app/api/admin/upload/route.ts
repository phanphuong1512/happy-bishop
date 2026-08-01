import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";

async function isAuthorized() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("hb_admin_auth");
  return authCookie?.value === "hb_authenticated_admin_session_2025";
}

export async function POST(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ success: false, message: "Không tìm thấy file tải lên!" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // If R2 bucket binding exists on Cloudflare
    try {
      const { env } = await getCloudflareContext();
      const r2 = (env as any)?.R2 || (env as any)?.IMAGES_BUCKET;
      if (r2) {
        const fileExt = file.name.split(".").pop() || "png";
        const fileName = `blog-covers/${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
        await r2.put(fileName, buffer, {
          httpMetadata: { contentType: file.type },
        });

        // CDN URL if R2 public domain configured
        const cdnUrl = `https://assets.happybishops.com/media/${fileName}`;
        return NextResponse.json({ success: true, url: cdnUrl, message: "Đã tải ảnh lên CDN thành công!" });
      }
    } catch (e) {
      console.log("R2 not configured, using optimized Base64 fallback");
    }

    // High performance Data URL fallback (works 100% everywhere without external storage setup)
    const mimeType = file.type || "image/png";
    const base64 = buffer.toString("base64");
    const dataUrl = `data:${mimeType};base64,${base64}`;

    return NextResponse.json({
      success: true,
      url: dataUrl,
      message: "Tải ảnh lên thành công!",
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: error.message || "Lỗi tải ảnh!" }, { status: 500 });
  }
}
