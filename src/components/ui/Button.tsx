import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-ring whitespace-nowrap select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[#2f4a35] hover:shadow-[0_6px_20px_-8px_rgba(58,90,64,0.5)] active:bg-[#28402d]",
  secondary:
    "bg-[var(--bg-card)] text-[var(--fg)] border border-[var(--border)] hover:border-[var(--accent-light)] hover:bg-[var(--accent-bg)]",
  ghost: "text-[var(--fg)] hover:bg-black/[0.04]",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm rounded-md",
  lg: "h-12 px-6 text-[15px] rounded-md",
};

type StyleProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = StyleProps & {
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonAsButton = StyleProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const classes = cn(base, variants[variant], sizes[size], props.className);

  if (props.href !== undefined) {
    const { href, external, children, ...rest } = props;
    // Strip out style props that aren't valid HTML attrs.
    const { variant: _v, size: _s, className: _c, ...attrs } = rest;
    void _v;
    void _s;
    void _c;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...attrs}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...attrs}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props;
  const { variant: _v, size: _s, className: _c, ...attrs } = rest;
  void _v;
  void _s;
  void _c;
  return (
    <button className={classes} {...attrs}>
      {children}
    </button>
  );
}
