"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Container } from "./container";
import { Logo } from "./logo";
import { LanguageToggle } from "./language-toggle";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/i18n/language-context";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { t } = useLanguage();

  const NAV_LINKS = [
    { label: t("nav.products"), href: "#produits" },
    { label: t("nav.story"), href: "#vision" },
    { label: t("nav.reviews"), href: "#avis" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-sand-100/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <a href="#accueil">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-800 transition-colors hover:text-clay-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>

          <button
            type="button"
            onClick={openCart}
            className="relative grid h-11 w-11 place-items-center rounded-full bg-ink-900 text-sand-50 transition-transform hover:scale-105"
            aria-label={t("nav.cart")}
          >
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-clay-500 text-[11px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-ink-900 lg:hidden"
            aria-label={t("nav.menu")}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-ink-900/5 bg-sand-100 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-800"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-1">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
