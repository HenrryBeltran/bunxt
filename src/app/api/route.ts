import { cookies } from "next/headers";

export async function GET() {
  cookies().set({
    name: "my_cookie",
    value: "jummy-cookie",
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return Response.json({ message: "Hello from NextJS API!" });
}
