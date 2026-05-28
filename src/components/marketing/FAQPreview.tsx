import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQAccordion, type FAQItem } from "@/components/faq/FAQAccordion";

const previewItems: FAQItem[] = [
  {
    question: "Contribution Arc は無料ですか?",
    answer:
      "基本機能は無料で利用できます。コミュニティ運営のために、将来的に一部の高度な機能を有料化する可能性がありますが、学習記録と GitHub 連携のコア体験はずっと無料で使えるようにする予定です。",
  },
  {
    question: "GitHub 連携は必須ですか?",
    answer:
      "必須ではありません。連携しなくても学習記録機能は使えます。GitHub と連携すると、コミット・PR・Issue が草として可視化され、学習時間と並べて積み上げを実感できます。",
  },
  {
    question: "データはどこに保存されますか?",
    answer:
      "学習記録はクラウド上に暗号化して保存され、デスクトップアプリと Web 版で同期されます。エクスポート機能で、いつでも自分のデータを取り出すことができます。",
  },
  {
    question: "Mac / Windows 以外でも使えますか?",
    answer:
      "Web 版があるため、Linux やモバイルブラウザからもアクセスできます。Linux 向けデスクトップアプリは検討中です。",
  },
];

export function FAQPreview() {
  return (
    <section
      id="faq-preview"
      className="py-20 md:py-[120px]"
      aria-labelledby="faq-preview-title"
    >
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title={<span id="faq-preview-title">よくある質問</span>}
        />
        <div className="mx-auto mt-12 max-w-3xl md:mt-14">
          <FAQAccordion items={previewItems} />
          <div className="mt-6 flex justify-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[#2f4a35] focus-ring"
            >
              もっと見る
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
