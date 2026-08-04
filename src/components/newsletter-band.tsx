"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "./container";
import { useLanguage } from "@/lib/i18n/language-context";

export function NewsletterBand() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-ink-950 py-20">
      <Container className="flex flex-col items-center text-center">
        <h2 className="font-[family-name:var(--font-serif-display)] text-3xl text-sand-50 sm:text-4xl">
          {t("newsletter.title")}
        </h2>
        <p className="mt-3 max-w-md text-ink-100">
          {t("newsletter.subtitle")}
        </p>

        {submitted ? (
          <p className="mt-7 flex items-center gap-2 rounded-full bg-mint-500/15 px-5 py-3 text-sm font-semibold text-mint-500">
            <Check size={16} />
            {t("newsletter.success")}
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder={t("newsletter.placeholder")}
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-ink-400 outline-none focus:border-clay-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-600"
            >
              {t("newsletter.cta")}
              <ArrowRight size={15} />
            </button>
          </form>
        )}
      </Container>
    </section>
  );
}
