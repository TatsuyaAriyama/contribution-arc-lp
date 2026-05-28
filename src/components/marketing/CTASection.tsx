import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section
      className="py-20 md:py-[120px]"
      aria-labelledby="cta-title"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] px-6 py-16 md:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_50%_0%,var(--accent-bg)_0%,transparent_70%)]"
          />
          <div className="relative flex flex-col items-center gap-7 text-center">
            <h2
              id="cta-title"
              className="text-[28px] md:text-[40px] font-bold tracking-tight text-balance"
            >
              今日から、学びを積み上げよう
            </h2>
            <p className="max-w-xl text-[15px] md:text-base text-[var(--fg-muted)] text-balance">
              小さな記録が、続けるかたちになる。
            </p>
            <Button href="/download" size="lg" variant="primary">
              ダウンロード
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
