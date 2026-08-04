"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Check } from "lucide-react";
import { Container } from "./container";
import { useLanguage } from "@/lib/i18n/language-context";
import { translations } from "@/lib/i18n/translations";

export function ContactSection() {
  const { t, locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const subjectOptions = translations[locale].contact.form.subjectOptions;

  const infoItems = [
    { icon: Mail, label: t("contact.info.email"), value: "hello@ama-wax.tg" },
    { icon: Phone, label: t("contact.info.phone"), value: "+228 90 00 00 00" },
    { icon: MapPin, label: t("contact.info.address"), value: t("contact.info.addressValue") },
    { icon: Clock, label: t("contact.info.hours"), value: t("contact.info.hoursValue") },
  ];

  return (
    <section id="contact" className="bg-sand-50 py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-clay-600">
              {t("contact.eyebrow")}
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-serif-display)] text-4xl text-ink-950 sm:text-5xl">
              {t("contact.title")}
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-500">
              {t("contact.subtitle")}
            </p>

            <ul className="mt-10 space-y-6">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-clay-500/10 text-clay-600">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-ink-400">{label}</p>
                    <p className="font-semibold text-ink-900">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-mint-500/15 text-mint-500">
                  <Check size={22} />
                </span>
                <p className="font-semibold text-ink-900">{t("newsletter.success")}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="text-sm font-medium text-ink-700">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-clay-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-clay-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">
                    {t("contact.form.subject")}
                  </label>
                  <select className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-clay-400">
                    {subjectOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-clay-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-ink-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
