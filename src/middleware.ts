import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/api/:path*",
};

export async function middleware(req: NextRequest) {
  console.log("Middleware!");
  console.log(req.method);
  console.log(req.url);

  const origin = req.headers.get("origin");
  console.log(origin);

  return NextResponse.next();
}
