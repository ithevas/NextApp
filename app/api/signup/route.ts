import { NextRequest, NextResponse } from "next/server";
import client from "@/db";

export async function POST(req: NextRequest) {
  try {
    const { email, name, password } = await req.json();
    const user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      await client.user.create({
        data: {
          email: email,
          password: password,
          name: name,
        },
      });
      return NextResponse.json({ msg: true });
    }
    return NextResponse.json({ msg: false });
  } catch (error) {
    return NextResponse.error();
  }
}

export function GET() {
  return Response.json(true);
}
