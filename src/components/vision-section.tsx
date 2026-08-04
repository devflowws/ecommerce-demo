import Image from "next/image";
import { Leaf, Users, Sparkle } from "lucide-react";
import { Container } from "./container";

const VALUES = [
  {
    icon: Leaf,
    title: "Matières locales",
    description: "Wax, raphia et cuir sourcés auprès de fournisseurs togolais.",
  },
  {
    icon: Users,
    title: "Ateliers partenaires",
    description: "Chaque pièce est confectionnée par des artisans de Lomé, rémunérés au juste prix.",
  },
  {
    icon: Sparkle,
    title: "Petites séries",
    description: "Pas de surproduction : des collections limitées, pensées pour durer.",
  },
];

export function VisionSection() {
  return (
    <section id="vision" className="bg-sand-50 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-[2rem] lg:order-1">
            <Image
              src="/products/pagne-wax-traditionnel.jpg"
              alt="Pagnes wax empilés, atelier Ama"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-clay-600">
              Notre histoire
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-serif-display)] text-4xl text-ink-950 sm:text-5xl">
              Le wax mérite mieux qu&apos;un rayon de supermarché.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              AMA est née à Lomé d&apos;une conviction simple : les tissus et
              savoir-faire togolais méritent d&apos;être portés fièrement,
              pas seulement exportés. Nous travaillons avec une poignée
              d&apos;ateliers locaux, en petites séries, pour que chaque
              pièce garde son caractère.
            </p>

            <ul className="mt-8 space-y-6">
              {VALUES.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-clay-500/10 text-clay-600">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">{title}</p>
                    <p className="mt-0.5 text-sm text-ink-500">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
