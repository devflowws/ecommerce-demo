"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader2, ShoppingBag } from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/i18n/language-context";

const LAST_ORDER_KEY = "ama-last-order";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const { t, locale } = useLanguage();
  const fmt = (n: number) => n.toLocaleString(locale === "fr" ? "fr-FR" : "en-US");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: subtotal, currency: "FCFA" }),
      });

      if (!res.ok) throw new Error("checkout_failed");
      const data = (await res.json()) as { transactionId: string; checkoutUrl: string };

      window.localStorage.setItem(
        LAST_ORDER_KEY,
        JSON.stringify({
          transactionId: data.transactionId,
          fullName,
          phone,
          address,
          city,
          items: items.map((i) => ({
            name: t(`products.items.${i.product.id}.name`),
            quantity: i.quantity,
          })),
          subtotal,
        }),
      );

      window.location.href = data.checkoutUrl;
    } catch {
      setError(t("checkout.error"));
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-sand-100 px-6 text-center">
        <ShoppingBag size={40} className="text-ink-300" />
        <p className="text-lg font-semibold text-ink-900">{t("checkout.emptyCart")}</p>
        <Link
          href="/"
          className="rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
        >
          {t("checkout.backToShop")}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sand-100">
      <header className="border-b border-ink-900/5 bg-sand-100/85 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <span className="rounded-full bg-clay-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-clay-700">
            {t("checkout.title")}
          </span>
        </Container>
      </header>

      <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_22rem] lg:items-start">
        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-7 shadow-sm">
          <h2 className="font-[family-name:var(--font-serif-display)] text-2xl text-ink-950">
            {t("checkout.shippingDetails")}
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-ink-700">{t("checkout.fullName")}</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-clay-400"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-ink-700">{t("checkout.phone")}</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+228 9X XX XX XX"
                className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-clay-400"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-ink-700">{t("checkout.address")}</label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-clay-400"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-ink-700">{t("checkout.city")}</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-clay-400"
              />
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-lg bg-clay-500/10 px-3.5 py-2.5 text-sm font-medium text-clay-700">
              {error}
            </p>
          )}

          <p className="mt-6 text-sm text-ink-400">{t("checkout.choosePaymentSubtitle")}</p>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-clay-500 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-clay-600 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {t("checkout.redirecting")}
              </>
            ) : (
              t("checkout.continueToPayment")
            )}
          </button>
        </form>

        <aside className="rounded-3xl bg-white p-7 shadow-sm">
          <h2 className="font-[family-name:var(--font-serif-display)] text-xl text-ink-950">
            {t("checkout.orderSummary")}
          </h2>

          <ul className="mt-5 space-y-4">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-sand-200">
                  <Image
                    src={product.image}
                    alt={t(`products.items.${product.id}.name`)}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink-900">
                    {t(`products.items.${product.id}.name`)}
                  </p>
                  <p className="text-xs text-ink-400">
                    {t("checkout.quantity")}: {quantity}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-medium text-ink-900">
                  {fmt(product.price * quantity)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2 border-t border-ink-900/5 pt-5 text-sm">
            <div className="flex justify-between text-ink-500">
              <span>{t("checkout.subtotal")}</span>
              <span>{fmt(subtotal)} FCFA</span>
            </div>
            <div className="flex justify-between text-ink-500">
              <span>{t("checkout.shipping")}</span>
              <span>{t("checkout.shippingValue")}</span>
            </div>
            <div className="flex justify-between border-t border-ink-900/5 pt-2 text-base font-semibold text-ink-900">
              <span>{t("checkout.total")}</span>
              <span>{fmt(subtotal)} FCFA</span>
            </div>
          </div>
        </aside>
      </Container>
    </div>
  );
}
