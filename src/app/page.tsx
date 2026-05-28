import { Nav } from "@/components/marketing/Nav";
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { FAQPreview } from "@/components/marketing/FAQPreview";
import { CTASection } from "@/components/marketing/CTASection";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex flex-1 flex-col">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
