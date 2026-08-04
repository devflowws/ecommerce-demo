import { Truck, Smartphone, RotateCcw, HandHeart } from "lucide-react";
import { Container } from "./container";

const POINTS = [
  { icon: Truck, label: "Livraison à Lomé sous 48h" },
  { icon: Smartphone, label: "Paiement Mobile Money" },
  { icon: RotateCcw, label: "Retours faciles sous 7 jours" },
  { icon: HandHeart, label: "Fait par des artisans locaux" },
];

export function TrustBar() {
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
