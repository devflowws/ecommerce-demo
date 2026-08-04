"use client";

import { useMemo, useState } from "react";
import { Container } from "./container";
import { ProductCard } from "./product-card";
import { useLanguage } from "@/lib/i18n/language-context";
import type { Product } from "@/lib/products";

export function ProductGrid({ products }: { products: Product[] }) {
  const { t } = useLanguage();
  const rawCategories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products],
  );
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="produits" className="bg-sand-100 py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-clay-600">
            {t("products.eyebrow")}
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-serif-display)] text-4xl text-ink-950 sm:text-5xl">
            {t("products.title")}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink-500">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActive("all")}
            className={
              active === "all"
                ? "rounded-full bg-ink-900 px-5 py-2 text-sm font-semibold text-white"
                : "rounded-full bg-sand-200 px-5 py-2 text-sm font-medium text-ink-700 hover:bg-sand-300"
            }
          >
            {t("products.all")}
          </button>
          {rawCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? "rounded-full bg-ink-900 px-5 py-2 text-sm font-semibold text-white"
                  : "rounded-full bg-sand-200 px-5 py-2 text-sm font-medium text-ink-700 hover:bg-sand-300"
              }
            >
              {t(`products.categories.${cat}`)}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
