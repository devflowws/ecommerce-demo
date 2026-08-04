"use client";

import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/i18n/language-context";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart();
  const { t, locale } = useLanguage();
  const [added, setAdded] = useState(false);

  const name = t(`products.items.${product.id}.name`);
  const description = t(`products.items.${product.id}.description`);
  const category = t(`products.categories.${product.category}`);
  const badge = product.badge ? t(`products.badges.${product.badge}`) : null;
  const price = product.price.toLocaleString(locale === "fr" ? "fr-FR" : "en-US");

  function handleAdd() {
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-sand-50"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand-200">
        <Image
          src={product.image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-sand-50/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-clay-700 shadow-sm">
            {badge}
          </span>
        )}

        <button
          type="button"
          onClick={handleAdd}
          className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-ink-900 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-clay-600 group-hover:translate-y-0 sm:translate-y-16 sm:group-hover:translate-y-0"
          aria-label={`${t("products.addToCart")} ${name}`}
        >
          {added ? <Check size={18} /> : <Plus size={18} />}
        </button>
      </div>

      <div className="px-1 pt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-clay-600">
          {category}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-ink-900">
          {name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-400">
          {description}
        </p>
        <p className="mt-2 font-[family-name:var(--font-serif-display)] text-xl text-ink-900">
          {price}{" "}
          <span className="text-sm text-ink-400">FCFA</span>
        </p>
      </div>
    </motion.div>
  );
}
