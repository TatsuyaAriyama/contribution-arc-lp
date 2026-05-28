import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteName = "Contribution Arc";
const description =
  "エンジニアの学習・貢献を、静かに積み上げる。GitHub の草と学習記録を一つの場所で。";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ogImageUrl = `${basePath}/og.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — 学習が続くを設計する`,
    template: `%s — ${siteName}`,
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Tatsuya Ariyama" }],
  keywords: [
    "Contribution Arc",
    "学習記録",
    "GitHub",
    "エンジニア",
    "個人開発",
    "OSS",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName,
    title: `${siteName} — 学習が続くを設計する`,
    description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteName,
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — 学習が続くを設計する`,
    description,
    images: [ogImageUrl],
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
