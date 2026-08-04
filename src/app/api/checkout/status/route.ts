import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.KOUDIPAY_API_URL ?? "http://localhost:8080";

export async function GET(request: NextRequest) {
  const ref = request.nextUrl.searchParams.get("ref");
  if (!ref) {
    return NextResponse.json({ message: "Missing ref." }, { status: 400 });
  }

  const res = await fetch(`${API_URL}/api/payments/${ref}/status`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json({ message: "Not found." }, { status: res.status });
  }

  return NextResponse.json(await res.json());
}
