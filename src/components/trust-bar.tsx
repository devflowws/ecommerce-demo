"use client";

import { Truck, Smartphone, RotateCcw, HandHeart } from "lucide-react";
import { Container } from "./container";
import { useLanguage } from "@/lib/i18n/language-context";

export function TrustBar() {
  const { t } = useLanguage();

  const POINTS = [
    { icon: Truck, label: t("trustBar.delivery") },
    { icon: Smartphone, label: t("trustBar.mobileMoney") },
    { icon: RotateCcw, label: t("trustBar.returns") },
    { icon: HandHeart, label: t("trustBar.handmade") },
  ];

  return (
    <section className="border-y border-ink-900/5 bg-sand-50 py-8">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {POINTS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2.5 text-center sm:flex-row sm:text-left"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-clay-500/10 text-clay-600">
                <Icon size={18} />
              </div>
              <span className="text-sm font-medium text-ink-700">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
