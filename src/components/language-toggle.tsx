"use client";

import { clsx } from "clsx";
import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageToggle({ light = false }: { light?: boolean }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={clsx(
        "flex items-center rounded-full border p-0.5 text-xs font-semibold",
        light ? "border-white/20" : "border-ink-900/10",
      )}
      role="group"
      aria-label={t("languageToggle.label")}
    >
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={clsx(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            locale === l
              ? "bg-clay-500 text-white"
              : light
                ? "text-sand-200 hover:text-white"
                : "text-ink-500 hover:text-ink-900",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
