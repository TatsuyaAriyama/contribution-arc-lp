import type { Metadata } from "next";
import { Apple, MonitorCheck, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DownloadCard } from "@/components/download/DownloadCard";
import { SystemRequirements } from "@/components/download/SystemRequirements";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "ダウンロード",
  description:
    "Contribution Arc を macOS / Windows のデスクトップアプリでダウンロード。Notarization 済み・コード署名済み。",
  alternates: { canonical: `${basePath}/download/` },
};

const RELEASES_BASE =
  "https://github.com/tatsuyaariyama/Contribution-Arc/releases/latest";

const downloads = [
  {
    platform: "macOS",
    arch: "Intel (x86_64)",
    fileName: "Contribution-Arc-x.x.x.dmg",
    href: RELEASES_BASE,
    icon: Apple,
  },
  {
    platform: "macOS",
    arch: "Apple Silicon (arm64)",
    fileName: "Contribution-Arc-arm64-x.x.x.dmg",
    href: RELEASES_BASE,
    icon: Apple,
    recommended: true,
  },
  {
    platform: "Windows",
    arch: "x64 (64-bit)",
    fileName: "Contribution-Arc-Setup-x.x.x.exe",
    href: RELEASES_BASE,
    icon: MonitorCheck,
  },
];

const installSteps: { os: string; steps: string[] }[] = [
  {
    os: "macOS",
    steps: [
      "ダウンロードした .dmg ファイルを開きます",
      "アプリアイコンを Applications フォルダにドラッグします",
      "Launchpad から Contribution Arc を起動します",
    ],
  },
  {
    os: "Windows",
    steps: [
      "ダウンロードした .exe ファイルを実行します",
      "インストーラの指示に従ってインストールします",
      "スタートメニューから Contribution Arc を起動します",
    ],
  },
];

export default function DownloadPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex flex-1 flex-col">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <Container>
            <SectionTitle
              eyebrow="Download"
              title="Contribution Arc をダウンロード"
              description="デスクトップアプリで、もっと静かに、もっと集中して。お使いの環境を選んでください。"
            />
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
              {downloads.map((d) => (
                <li key={`${d.platform}-${d.arch ?? ""}`}>
                  <DownloadCard {...d} />
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="border-t border-[var(--border)] py-20 md:py-[120px]">
          <Container className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <SectionTitle
              eyebrow="Requirements"
              title="システム要件"
              description="お使いの環境が以下を満たしているかご確認ください。"
            />
            <SystemRequirements />
          </Container>
        </section>

        <section className="border-t border-[var(--border)] py-20 md:py-[120px]">
          <Container className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <SectionTitle
              eyebrow="Install"
              title="インストール手順"
              description="ダウンロード後、以下の手順でインストールできます。"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {installSteps.map((entry) => (
                <article
                  key={entry.os}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6"
                >
                  <h3 className="text-[15px] font-semibold tracking-tight">
                    {entry.os}
                  </h3>
                  <ol className="mt-4 space-y-3 text-[14.5px] leading-[1.75] text-[var(--fg-muted)]">
                    {entry.steps.map((step, i) => (
                      <li key={step} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent-bg)] text-[11px] font-medium text-[var(--accent)]"
                        >
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-[var(--border)] py-20 md:py-[120px]">
          <Container>
            <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:items-center md:p-8">
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--accent-bg)] text-[var(--accent)]"
              >
                <ShieldCheck size={20} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight">
                  セキュリティについて
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.75] text-[var(--fg-muted)]">
                  macOS は Notarization 済み、Windows はコード署名済みです。インストール時に警告が表示されることはありません。
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
