import { NextResponse } from "next/server";

export async function GET() {
  const env = process.env.NODE_ENV;

  // cookies().set({
  //   name: "my_cookie",
  //   value: "jummy-cookie",
  //   httpOnly: true,
  //   domain: env === "development" ? ".localhost" : ".bunxt.vercel.app",
  //   secure: env === "development" ? false : true,
  //   path: "/",
  // });

  return NextResponse.json({ message: "Hello from NextJS API!", env });
}
