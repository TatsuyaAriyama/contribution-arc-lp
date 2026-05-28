import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "ダウンロード", href: "/download" },
  { label: "FAQ", href: "/faq" },
  {
    label: "GitHub",
    href: "https://github.com/tatsuyaariyama/Contribution-Arc",
    external: true,
  },
  {
    label: "X",
    href: "https://x.com/",
    external: true,
  },
  { label: "お問い合わせ", href: "mailto:hello@example.com" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--bg)] py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight focus-ring"
          >
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
            <span className="text-[15px]">Contribution Arc</span>
          </Link>

          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--fg-muted)]">
              {navLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[var(--fg)] focus-ring"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[var(--fg)] focus-ring"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <p className="mt-10 text-[13px] text-[var(--fg-faint)]">
          © 2026 Tatsuya Ariyama
        </p>
      </Container>
    </footer>
  );
}
