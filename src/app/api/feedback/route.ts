import { NextRequest, NextResponse } from "next/server";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  const data = (await req.json()) as Feedback;

  console.log(data);

  return NextResponse.json(data);
}
