"use client";

import { Star } from "lucide-react";
import { Container } from "./container";
import { useLanguage } from "@/lib/i18n/language-context";
import { translations } from "@/lib/i18n/translations";

export function Testimonials() {
  const { t, locale } = useLanguage();
  const reviews = translations[locale].testimonials.reviews;

  return (
    <section id="avis" className="bg-sand-100 py-24">
      <Container>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-clay-600">
            {t("testimonials.eyebrow")}
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-serif-display)] text-4xl text-ink-950 sm:text-5xl">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-ink-900/5 bg-sand-50 p-7"
            >
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-ink-700">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-ink-900">
                {review.name}
              </p>
              <p className="text-xs text-ink-400">{review.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
