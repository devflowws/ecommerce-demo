"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "./container";

export function NewsletterBand() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-ink-950 py-20">
      <Container className="flex flex-col items-center text-center">
        <h2 className="font-[family-name:var(--font-serif-display)] text-3xl text-sand-50 sm:text-4xl">
          Les nouveautés, avant tout le monde
        </h2>
        <p className="mt-3 max-w-md text-ink-100">
          Une fois par mois, les nouvelles pièces et les ventes privées. Rien
          de plus.
        </p>

        {submitted ? (
          <p className="mt-7 flex items-center gap-2 rounded-full bg-mint-500/15 px-5 py-3 text-sm font-semibold text-mint-500">
            <Check size={16} />
            Merci, à très vite dans votre boîte mail !
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
              placeholder="votre@email.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-ink-400 outline-none focus:border-clay-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-600"
            >
              S&apos;abonner
              <ArrowRight size={15} />
            </button>
          </form>
        )}
      </Container>
    </section>
  );
}
