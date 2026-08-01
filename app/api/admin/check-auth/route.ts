import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("hb_admin_auth");

  if (authCookie?.value === "hb_authenticated_admin_session_2025") {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
