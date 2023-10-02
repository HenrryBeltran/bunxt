import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { name: "Charizard", type: ["Fire", "Fly"] },
    { name: "Pikachu", type: ["Electric"] },
  ]);
}
