"use client";

import { motion } from "framer-motion";
import { BookOpen, Coffee, Users } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GitHubIcon } from "@/components/ui/GitHubIcon";

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>>;

type Feature = {
  icon: IconComponent;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "学習記録の可視化",
    description:
      "時間・教材・ジャンルで記録。グラフで積み上げを実感",
  },
  {
    icon: GitHubIcon,
    title: "GitHub 連携",
    description:
      "コミット・PR・Issue を草として表示。コードでの貢献も学習記録に",
  },
  {
    icon: Users,
    title: "静かなコミュニティ",
    description: "煽らないタイムライン。仲間の学びをそっと感じる",
  },
  {
    icon: Coffee,
    title: "Silent Workspace",
    description:
      "誰かと一緒に作業する空間。話さなくても、隣にいる安心感",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Features() {
  return (
    <section
      id="features"
      className="py-20 md:py-[120px]"
      aria-labelledby="features-title"
    >
      <Container>
        <SectionTitle
          eyebrow="Features"
          title={<span id="features-title">Contribution Arc にできること</span>}
          description="学びを積み上げる、その邪魔をしないための4つの機能。"
        />

        <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          {features.map((feature, i) => (
            <motion.li
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7 transition-colors hover:border-[var(--accent-light)]"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--accent-bg)] text-[var(--accent)] transition-transform duration-200 group-hover:scale-[1.04]"
                >
                  <feature.icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="text-[18px] font-semibold tracking-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-[1.75] text-[var(--fg-muted)]">
                {feature.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
