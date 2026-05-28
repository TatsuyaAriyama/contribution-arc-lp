import { Download, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

type DownloadCardProps = {
  platform: string;
  arch?: string;
  fileName: string;
  href: string;
  icon: LucideIcon;
  recommended?: boolean;
};

export function DownloadCard({
  platform,
  arch,
  fileName,
  href,
  icon: Icon,
  recommended,
}: DownloadCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-colors hover:border-[var(--accent-light)]">
      {recommended ? (
        <span className="absolute -top-2.5 right-5 rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[11px] font-medium text-white">
          おすすめ
        </span>
      ) : null}
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--accent-bg)] text-[var(--accent)]"
        >
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <div className="flex flex-col">
          <h3 className="text-[16px] font-semibold tracking-tight">
            {platform}
          </h3>
          {arch ? (
            <span className="text-[13px] text-[var(--fg-muted)]">{arch}</span>
          ) : null}
        </div>
      </div>

      <p className="mt-5 font-mono text-[12.5px] text-[var(--fg-muted)] break-all">
        {fileName}
      </p>

      <div className="mt-6">
        <Button href={href} external variant="primary" size="md" className="w-full">
          <Download size={14} strokeWidth={2} />
          ダウンロード
        </Button>
      </div>
    </article>
  );
}
