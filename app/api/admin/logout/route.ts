import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true, message: "Đã đăng xuất!" });
  response.cookies.set("hb_admin_auth", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return response;
}
