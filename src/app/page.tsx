import HeroSection from "@/components/hero/HeroSection";
import IntroSection from "@/components/introsection/IntroSection";
import ServiceSection from "@/components/services/ServiceSection";
import NotAloneSection from "@/components/notalone/NotAloneSection";
import OfficeSection from "@/components/office/OfficeSection";
import AboutSection from "@/components/about/AboutSection";
import FindMeSection from "@/components/findme/FindMeSection";
import GetStarted from "@/components/getstarted/GetStarted";
import FAQSection from "@/components/faq/FAQSection";
import BackgroundSection from "@/components/background/BackgroundSection";
import ContactSection from "@/components/contact/ContactSection";
export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <NotAloneSection />
      <OfficeSection />
      <IntroSection />
      <FAQSection />
      <BackgroundSection />
      <GetStarted />
    </main>
  );
}
