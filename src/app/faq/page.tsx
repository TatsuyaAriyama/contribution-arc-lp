import type { Metadata } from "next";
import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQAccordion, type FAQItem } from "@/components/faq/FAQAccordion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "Contribution Arc に関するよくある質問。料金、機能、データの取り扱いなど。",
  alternates: { canonical: `${basePath}/faq/` },
};

type Category = {
  id: string;
  title: string;
  items: FAQItem[];
};

const categories: Category[] = [
  {
    id: "basics",
    title: "基本について",
    items: [
      {
        question: "Contribution Arc は無料ですか?",
        answer:
          "基本機能は無料で利用できます。学習記録と GitHub 連携のコア体験はずっと無料で使えるようにする予定です。将来的に一部の高度な機能を有料化する可能性があります。",
      },
      {
        question: "Mac / Windows 以外でも使えますか?",
        answer:
          "Web 版があるため、Linux やモバイルブラウザからもアクセスできます。Linux 向けのデスクトップアプリは検討中です。",
      },
      {
        question: "アカウント登録は必要ですか?",
        answer:
          "デスクトップ版・Web 版ともにアカウント登録が必要です。GitHub アカウントと連携することで、ワンクリックでサインアップできます。",
      },
    ],
  },
  {
    id: "features",
    title: "機能について",
    items: [
      {
        question: "GitHub 連携は必須ですか?",
        answer:
          "必須ではありません。連携しなくても学習記録機能は使えます。GitHub と連携すると、コミット・PR・Issue が草として可視化され、学習時間と並べて積み上げを実感できます。",
      },
      {
        question: "ストリーク機能はありますか?",
        answer:
          "意図的にありません。「連続日数を切らさないため」の記録は、長期的な学習の継続を妨げると考えています。Contribution Arc は煽らない記録を目指しています。",
      },
      {
        question: "Silent Workspace とは何ですか?",
        answer:
          "誰かと一緒に作業する空間です。お互いの作業状況がそっと共有され、話さなくても隣にいる安心感が得られます。集中したいときに、ひとりで作業するよりも続きやすくなります。",
      },
      {
        question: "学習以外の記録 (読書・運動など) もできますか?",
        answer:
          "現時点ではエンジニアの学習・コード貢献を中心に設計されていますが、将来的には資格学習・語学・読書なども記録できるよう拡張予定です。",
      },
    ],
  },
  {
    id: "privacy",
    title: "学習データ・プライバシー",
    items: [
      {
        question: "データはどこに保存されますか?",
        answer:
          "学習記録はクラウド上に暗号化して保存され、デスクトップアプリと Web 版で同期されます。サーバーは日本国内のリージョンを利用しています。",
      },
      {
        question: "学習データのエクスポートはできますか?",
        answer:
          "はい。設定画面から JSON / CSV 形式でエクスポートできます。データはあなたのものです。いつでも取り出せます。",
      },
      {
        question: "アカウントを削除するとデータはどうなりますか?",
        answer:
          "アカウント削除後 30 日以内に、学習記録を含むすべての個人データがサーバーから完全に削除されます。削除前にエクスポート機能でバックアップを取ることをおすすめします。",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex flex-1 flex-col">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <Container>
            <SectionTitle
              eyebrow="FAQ"
              title="よくある質問"
              description="Contribution Arc についてよく寄せられる質問をまとめました。"
            />
          </Container>
        </section>

        <section className="pb-20 md:pb-[120px]">
          <Container>
            <div className="mx-auto max-w-3xl space-y-14">
              {categories.map((category) => (
                <div key={category.id} id={category.id}>
                  <h2 className="mb-5 text-[20px] font-semibold tracking-tight">
                    {category.title}
                  </h2>
                  <FAQAccordion items={category.items} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
