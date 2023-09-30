import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
  cookies().set({
    name: "my_cookie",
    value: "jummy-cookie",
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return Response.json({ message: "Hello from NextJS API!" });
}
