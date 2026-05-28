"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { asset } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-7">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-[36px] md:text-[48px] font-bold tracking-tight text-balance leading-[1.15]"
          >
            Contribution Arc
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.07, ease }}
            className="text-[22px] md:text-[28px] font-semibold text-[var(--fg)] text-balance"
          >
            学習が続くを設計する
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease }}
            className="max-w-[36rem] text-[15px] md:text-base text-[var(--fg-muted)] text-balance"
          >
            エンジニアの学習・貢献を、静かに積み上げる。
            GitHub の草と学習記録を一つの場所で。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.21, ease }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Button href="/download" size="lg" variant="primary">
              ダウンロード
            </Button>
            <Button
              href="https://tatsuyaariyama.github.io/Contribution-Arc/"
              external
              size="lg"
              variant="secondary"
            >
              Web版を試す
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_50%,var(--accent-bg)_0%,transparent_70%)] blur-2xl" />
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18),0_8px_28px_-12px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[var(--bg)]">
              <Image
                src={asset("/screenshots/hero.svg")}
                alt="Contribution Arc のアプリ画面"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(80%_100%_at_50%_0%,rgba(141,176,144,0.18)_0%,transparent_70%)]"
      />
    </section>
  );
}
