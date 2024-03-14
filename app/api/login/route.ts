import { NextRequest, NextResponse } from "next/server";
import client from "@/db";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = await client.user.findUnique({
    where: {
      email,
    },
  });
  const verify = password === user?.password;
  if (verify) {
    return NextResponse.json({ msg: true });
  }
  return NextResponse.json({ msg: false });
}
