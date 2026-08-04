import "server-only";

const API_URL = process.env.KOUDIPAY_API_URL ?? "http://localhost:8080";
const API_KEY = process.env.KOUDIPAY_API_KEY;

type InitPaymentInput = {
  amount: number;
  currency: string;
  referenceId: string;
  returnUrl: string;
};

type InitPaymentResult = {
  transactionId: string;
  checkoutUrl: string;
};

export async function initKoudipayPayment(
  input: InitPaymentInput,
): Promise<InitPaymentResult> {
  if (!API_KEY) {
    throw new Error("KOUDIPAY_API_KEY is not configured.");
  }

  const res = await fetch(`${API_URL}/api/payments/init`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": API_KEY,
    },
    body: JSON.stringify(input),
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`KoudiPay init failed (${res.status}): ${body}`);
  }

  return res.json();
}
