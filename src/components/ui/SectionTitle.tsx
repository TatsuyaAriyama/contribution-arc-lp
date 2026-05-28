import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-[24px] md:text-[32px] font-semibold text-balance">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[15px] md:text-base text-[var(--fg-muted)] text-balance">
          {description}
        </p>
      ) : null}
    </div>
  );
}
