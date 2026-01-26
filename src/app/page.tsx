import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import MedicalServices from "@/components/sections/services";
import ExperienceIntegral from "@/components/sections/experience-integral";
import FAQSection from "@/components/sections/faq";
import CtaBanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Benefits />
      <MedicalServices />
      <ExperienceIntegral />
      <FAQSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
