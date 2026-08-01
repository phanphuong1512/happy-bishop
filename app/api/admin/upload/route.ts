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

    // Upload to R2 bucket (binding: R2 in wrangler.jsonc)
    try {
      const { env } = await getCloudflareContext();
      const r2 = (env as any)?.R2;
      if (r2) {
        const fileExt = file.name.split(".").pop() || "png";
        const fileName = `blog/${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
        await r2.put(fileName, buffer, {
          httpMetadata: { contentType: file.type },
        });

        const cdnUrl = `https://assets.happybishops.com/${fileName}`;
        return NextResponse.json({ success: true, url: cdnUrl, message: "Đã tải ảnh lên CDN thành công!" });
      } else {
        console.error("R2 binding not found in env. Available keys:", Object.keys(env as any));
      }
    } catch (e: any) {
      console.error("R2 upload error:", e?.message || e);
      return NextResponse.json({ success: false, message: `Lỗi tải ảnh lên R2: ${e?.message || "Unknown error"}` }, { status: 500 });
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
