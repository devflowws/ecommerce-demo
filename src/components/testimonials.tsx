import { Star } from "lucide-react";
import { Container } from "./container";

const REVIEWS = [
  {
    name: "Akossiwa D.",
    role: "Cliente à Lomé",
    quote:
      "L'ensemble Adja est encore plus beau en vrai. Livré en deux jours et payé directement en Mobile Money, aucune friction.",
  },
  {
    name: "Yawa T.",
    role: "Cliente à Kara",
    quote:
      "Le coupon de wax premium a une tenue des couleurs impressionnante après plusieurs lavages. Je recommande sans hésiter.",
  },
  {
    name: "Kokou M.",
    role: "Client à Lomé",
    quote:
      "Le boubou Kwame est devenu ma tenue de toutes les grandes occasions. Le tissu est vraiment de qualité.",
  },
];

export function Testimonials() {
  return (
    <section id="avis" className="bg-sand-100 py-24">
      <Container>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-clay-600">
            Avis clients
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-serif-display)] text-4xl text-ink-950 sm:text-5xl">
            Ce qu&apos;on en dit
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review) => (
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
