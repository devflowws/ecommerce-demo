"use client";

import { Container } from "./container";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/i18n/language-context";
import { translations } from "@/lib/i18n/translations";

export function SiteFooter() {
  const { t, locale } = useLanguage();

  const shopLinks = translations[locale].footer.shopLinks;
  const companyLinks = translations[locale].footer.companyLinks;

  return (
    <footer className="bg-ink-950 pt-16">
      <Container>
        <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sand-50">
              {t("footer.shop")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {shopLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#produits"
                    className="text-sm text-ink-300 transition-colors hover:text-sand-50"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sand-50">
              {t("footer.company")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((label, i) => (
                <li key={label}>
                  <a
                    href={i === 0 ? "#vision" : i === 1 ? "#contact" : "#"}
                    className="text-sm text-ink-300 transition-colors hover:text-sand-50"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sand-50">
              {t("footer.payments")}
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-sand-100">
                Flooz
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-sand-100">
                Mixx by Yas
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-ink-400 sm:flex-row">
          <span>© {new Date().getFullYear()} AMA. {t("footer.rights")}</span>
          <span>Lomé, Togo</span>
        </div>
      </Container>
    </footer>
  );
}
