import { NextRequest, NextResponse } from "next/server";
import { initKoudipayPayment } from "@/lib/koudipay";

type CheckoutBody = {
  amount: number;
  currency?: string;
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as CheckoutBody;

  if (!body.amount || body.amount <= 0) {
    return NextResponse.json({ message: "Invalid amount." }, { status: 400 });
  }

  const referenceId = crypto.randomUUID();
  const origin = request.nextUrl.origin;
  const returnUrl = `${origin}/order-confirmation`;

  try {
    const result = await initKoudipayPayment({
      amount: body.amount,
      currency: body.currency ?? "FCFA",
      referenceId,
      returnUrl,
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Unable to start checkout." },
      { status: 502 },
    );
  }
}
