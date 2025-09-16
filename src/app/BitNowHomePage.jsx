'use client';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './HeroSection';
import TrustedPlatformSection from './TrustedPlatformSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
export default function BitNowHomePage() {
  return (
    <div className="min-h-screen bg-[#091c23] relative overflow-hidden">
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <TrustedPlatformSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
