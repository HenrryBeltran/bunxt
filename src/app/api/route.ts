import { cookies } from "next/headers";

export async function GET() {
  const env = process.env.NODE_ENV;

  cookies().set({
    name: "my_cookie",
    value: "jummy-cookie",
    httpOnly: true,
    secure: env === "development" ? false : true,
    path: "/",
  });

  return Response.json({ message: "Hello from NextJS API!", env });
}
