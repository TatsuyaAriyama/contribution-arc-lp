import { Apple, MonitorCheck } from "lucide-react";

type Requirement = {
  label: string;
  value: string;
};

const items: { icon: typeof Apple; title: string; rows: Requirement[] }[] = [
  {
    icon: Apple,
    title: "macOS",
    rows: [
      { label: "OS", value: "11.0 (Big Sur) 以降" },
      { label: "アーキテクチャ", value: "Intel / Apple Silicon" },
    ],
  },
  {
    icon: MonitorCheck,
    title: "Windows",
    rows: [
      { label: "OS", value: "Windows 10 以降" },
      { label: "アーキテクチャ", value: "x64 (64-bit)" },
    ],
  },
];

export function SystemRequirements() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6"
        >
          <div className="flex items-center gap-2.5">
            <item.icon size={18} strokeWidth={1.8} className="text-[var(--accent)]" />
            <h3 className="text-[15px] font-semibold tracking-tight">
              {item.title}
            </h3>
          </div>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 text-[14px]">
            {item.rows.map((row) => (
              <div key={row.label} className="contents">
                <dt className="text-[var(--fg-muted)]">{row.label}</dt>
                <dd className="text-[var(--fg)]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
