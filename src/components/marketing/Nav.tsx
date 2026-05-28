import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur-md">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight focus-ring"
          aria-label="Contribution Arc ホームへ"
        >
          <Logo />
          <span className="text-[15px]">Contribution Arc</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-[var(--fg-muted)] md:flex">
          <Link href="/download" className="transition-colors hover:text-[var(--fg)] focus-ring">
            ダウンロード
          </Link>
          <Link href="/faq" className="transition-colors hover:text-[var(--fg)] focus-ring">
            FAQ
          </Link>
          <a
            href="https://github.com/tatsuyaariyama/Contribution-Arc"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--fg)] focus-ring"
          >
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button href="/download" size="md" variant="primary">
            ダウンロード
          </Button>
        </div>
      </Container>
    </header>
  );
}

function Logo() {
  return (
    <span
      aria-hidden
      className="grid h-7 w-7 place-items-center rounded-md bg-[var(--accent)] text-white"
    >
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 18 A10 10 0 0 1 20 18" />
        <circle cx="12" cy="18" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}
