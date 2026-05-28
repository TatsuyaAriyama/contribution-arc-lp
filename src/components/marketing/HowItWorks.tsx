"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    title: "ダウンロードしてインストール",
    description: "macOS / Windows のデスクトップアプリ、または Web 版から。",
  },
  {
    title: "アカウント作成",
    description: "GitHub 連携で、すぐに草と学習記録を一つの場所に。",
  },
  {
    title: "学習を記録、仲間とつながる",
    description: "今日の積み上げを残し、フォロー中の人の流れを眺める。",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-[var(--border)] bg-[color-mix(in_srgb,var(--accent-bg)_40%,var(--bg))] py-20 md:py-[120px]"
      aria-labelledby="how-title"
    >
      <Container>
        <SectionTitle
          eyebrow="How it works"
          title={<span id="how-title">使い始め方</span>}
          description="3ステップで、学びの記録を今日から残せる。"
        />

        <ol className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7"
            >
              <span
                aria-hidden
                className="text-[13px] font-medium tracking-[0.14em] text-[var(--accent)]"
              >
                STEP {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[18px] font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.75] text-[var(--fg-muted)]">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
