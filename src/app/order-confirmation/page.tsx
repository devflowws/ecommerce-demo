"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/i18n/language-context";

const LAST_ORDER_KEY = "ama-last-order";

type BackendStatus = "en_attente" | "reussi" | "echoue";

type StatusResponse = {
  transactionId: string;
  status: BackendStatus;
  amount: number;
  currency: string;
};

type LastOrder = {
  transactionId: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  items: { name: string; quantity: number }[];
  subtotal: number;
};

function ConfirmationContent() {
  const params = useSearchParams();
  const urlStatus = params.get("status");
  const { clearCart } = useCart();
  const { t, locale } = useLanguage();
  const fmt = (n: number) => n.toLocaleString(locale === "fr" ? "fr-FR" : "en-US");

  const [order, setOrder] = useState<LastOrder | null>(null);
  const [backendStatus, setBackendStatus] = useState<BackendStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(LAST_ORDER_KEY);
    const parsed = stored ? (JSON.parse(stored) as LastOrder) : null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from localStorage post-mount, same pattern as cart-context/language-context
    setOrder(parsed);

    if (!parsed) {
      setLoading(false);
      return;
    }

    fetch(`/api/checkout/status?ref=${parsed.transactionId}`)
      .then((res) => (res.ok ? (res.json() as Promise<StatusResponse>) : null))
      .then((data) => {
        if (data) setBackendStatus(data.status);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (backendStatus === "reussi") {
      clearCart();
      window.localStorage.removeItem(LAST_ORDER_KEY);
    }
    // clearCart is stable (see CartProvider); omitting it avoids re-firing this effect on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backendStatus]);

  const isSuccess = backendStatus === "reussi" || (backendStatus === null && urlStatus === "success");
  const isFailed = backendStatus === "echoue";

  return (
    <div className="flex min-h-screen flex-col bg-sand-100">
      <header className="border-b border-ink-900/5 bg-sand-100/85 backdrop-blur-md">
        <Container className="flex h-20 items-center">
          <Link href="/">
            <Logo />
          </Link>
        </Container>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-sm">
          {loading ? (
            <div className="flex flex-col items-center gap-4 py-10">
              <Loader2 size={36} className="animate-spin text-clay-500" />
              <p className="text-sm text-ink-500">{t("checkout.redirecting")}</p>
            </div>
          ) : !order ? (
            <div className="flex flex-col items-center gap-4 py-6">
              <p className="text-lg font-semibold text-ink-900">{t("checkout.emptyCart")}</p>
              <Link
                href="/"
                className="rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                {t("checkout.backToShop")}
              </Link>
            </div>
          ) : isSuccess ? (
            <>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint-500/15">
                <CheckCircle2 size={34} className="text-mint-600" />
              </div>
              <h1 className="mt-5 font-[family-name:var(--font-serif-display)] text-2xl text-ink-950">
                {t("checkout.orderConfirmed")}
              </h1>
              <div className="mt-6 space-y-2 rounded-xl bg-sand-100 p-4 text-left text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-500">{t("checkout.reference")}</span>
                  <span className="font-medium text-ink-900">{order.transactionId}</span>
                </div>
                {order.items.map((item) => (
                  <div key={item.name} className="flex justify-between">
                    <span className="text-ink-500">
                      {item.name} × {item.quantity}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between border-t border-ink-900/10 pt-2 font-semibold text-ink-900">
                  <span>{t("checkout.total")}</span>
                  <span>{fmt(order.subtotal)} FCFA</span>
                </div>
              </div>
              <Link
                href="/"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-ink-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                {t("checkout.backToShop")}
              </Link>
            </>
          ) : (
            <>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-clay-500/10">
                <XCircle size={34} className="text-clay-600" />
              </div>
              <h1 className="mt-5 font-[family-name:var(--font-serif-display)] text-2xl text-ink-950">
                {isFailed ? t("checkout.error") : t("checkout.redirecting")}
              </h1>
              <Link
                href="/checkout"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-ink-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                {t("checkout.continueToPayment")}
              </Link>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense>
      <ConfirmationContent />
    </Suspense>
  );
}
