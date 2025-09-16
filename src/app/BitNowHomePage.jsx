'use client';
 import Header from'@/components/common/Header';
 import Footer from'@/components/common/Footer';
 import HeroSection from'./HeroSection';
import TrustedPlatformSection from './TrustedPlatformSection';
 import TestimonialsSection from'./TestimonialsSection';
 import FAQSection from'./FAQSection';
export default function BitNowHomePage() {
  return (
    <div className="min-h-screen bg-[#091c23] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/img_pngwing_24.png" 
          alt="" 
          className="absolute top-[1095px] left-0 w-[56%] max-w-[800px] h-auto opacity-20"
        />
        <img 
          src="/images/img_pngwing_25.png" 
          alt="" 
          className="absolute top-[2497px] right-0 w-[56%] max-w-[800px] h-auto opacity-20"
        />
        <img 
          src="/images/img_pngwing_26.png" 
          alt="" 
          className="absolute top-[3312px] left-0 w-[54%] max-w-[788px] h-auto opacity-20"
        />
        <img 
          src="/images/img_pngwing_27.png" 
          alt="" 
          className="absolute top-[4455px] right-0 w-[52%] max-w-[758px] h-auto opacity-20"
        />
        <img 
          src="/images/img_pngwing_28.png" 
          alt="" 
          className="absolute top-[5286px] left-0 w-[52%] max-w-[760px] h-auto opacity-20"
        />
      </div>

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
  )
}