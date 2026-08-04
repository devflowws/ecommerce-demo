"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "./container";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-sand-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-[32rem] w-[32rem] rounded-full bg-clay-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
      </div>

      <Container className="relative grid gap-14 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-clay-500/20 bg-clay-500/10 px-4 py-1.5 text-sm font-medium text-clay-700"
          >
            <Sparkles size={14} />
            Fait à Lomé, porté partout
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 font-[family-name:var(--font-serif-display)] text-5xl leading-[1.05] text-ink-950 sm:text-6xl"
          >
            Le wax, réinventé
            <br />
            <span className="text-clay-600">pour votre quotidien.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600"
          >
            Robes, tissus et accessoires façonnés par des artisans togolais.
            Livrés à Lomé, payables en Mobile Money, sans compromis sur la
            qualité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#produits"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-ink-900/20 transition-all hover:bg-ink-800"
            >
              Découvrir la collection
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#vision"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/15 px-7 py-3.5 text-base font-semibold text-ink-900 transition-colors hover:bg-ink-900/5"
            >
              Notre histoire
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]"
        >
          <Image
            src="/products/ensemble-adja.jpg"
            alt="Ensemble wax Adja, porté"
            fill
            priority
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-sand-50/95 px-4 py-3 shadow-lg backdrop-blur">
            <div>
              <p className="text-sm font-semibold text-ink-900">
                Ensemble Adja
              </p>
              <p className="text-xs text-ink-400">Best-seller ce mois-ci</p>
            </div>
            <span className="font-[family-name:var(--font-serif-display)] text-lg text-clay-600">
              24 500 F
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
