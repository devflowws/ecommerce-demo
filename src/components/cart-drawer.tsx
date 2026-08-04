"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/i18n/language-context";

export function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, setQuantity, removeItem } =
    useCart();
  const { t, locale } = useLanguage();
  const fmt = (n: number) => n.toLocaleString(locale === "fr" ? "fr-FR" : "en-US");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ink-950/50"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-sand-50 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-ink-900/10 px-6 py-5">
              <h2 className="flex items-center gap-2 font-[family-name:var(--font-serif-display)] text-2xl text-ink-900">
                <ShoppingBag size={20} />
                {t("cart.title")}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                className="grid h-9 w-9 place-items-center rounded-full text-ink-600 hover:bg-ink-900/5"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <p className="mt-10 text-center text-sm text-ink-400">
                  {t("cart.empty")}
                </p>
              ) : (
                <ul className="space-y-5">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex gap-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-sand-200">
                        <Image
                          src={product.image}
                          alt={t(`products.items.${product.id}.name`)}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-ink-900">
                          {t(`products.items.${product.id}.name`)}
                        </p>
                        <p className="text-xs text-ink-400">
                          {fmt(product.price)} FCFA
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(product.id, quantity - 1)
                            }
                            className="grid h-7 w-7 place-items-center rounded-full border border-ink-900/10 text-ink-700 hover:bg-ink-900/5"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-5 text-center text-sm font-medium text-ink-900">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(product.id, quantity + 1)
                            }
                            className="grid h-7 w-7 place-items-center rounded-full border border-ink-900/10 text-ink-700 hover:bg-ink-900/5"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItem(product.id)}
                            className="ml-auto text-ink-300 hover:text-clay-600"
                            aria-label="Remove"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-ink-900/10 px-6 py-5">
                <div className="flex items-center justify-between text-base font-semibold text-ink-900">
                  <span>{t("cart.subtotal")}</span>
                  <span>{fmt(subtotal)} FCFA</span>
                </div>
                <p className="mt-1 text-xs text-ink-400">
                  {t("cart.shippingNote")}
                </p>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-clay-500 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-clay-600"
                >
                  {t("cart.checkout")}
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
