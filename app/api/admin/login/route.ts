import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === "admin" && password === "anhlongchithanh@123") {
      const response = NextResponse.json({ success: true, message: "Đăng nhập thành công!" });
      
      // Set secure HTTP-only auth cookie valid for 7 days
      response.cookies.set("hb_admin_auth", "hb_authenticated_admin_session_2025", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Tài khoản hoặc mật khẩu không chính xác!" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Đã xảy ra lỗi máy chủ!" },
      { status: 500 }
    );
  }
}
