import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    const url = req.nextUrl.clone();
    url.pathname = "/home";
    if (!session) return NextResponse.redirect(url);
  }
}
