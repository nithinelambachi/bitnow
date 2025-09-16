'use client';
import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
export default function HeroSection() {
  const [watchVideoClicked, setWatchVideoClicked] = useState(false);
  const containerRef = useRef(null);

  const handleLearnMore = () => {
    console.log('Learn More clicked');
  };

  const handleWatchVideo = () => {
    setWatchVideoClicked(true);
    console.log('Watch Video clicked');
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-[linear-gradient(180deg,#091c22_0%,#091c2200_50%,#091c22_100%)] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/img_bitcoinabstract_2.png)' }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[64px] sm:gap-[96px] lg:gap-[128px] justify-start items-center py-8 sm:py-12 lg:py-16">
          <div className="relative w-full max-w-[1192px] mx-auto">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex flex-col justify-start items-end w-full lg:w-[92%]">
                <h1
                  className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-normal leading-[48px] sm:leading-[72px] md:leading-[84px] lg:leading-[96px] text-[#e9edf8] w-full relative z-20"
                  style={{ fontFamily: 'Monomaniac One' }}
                >
                  Ultrices ut etiam vulputate ante congue jokichn na
                  <span className="inline-block overflow-hidden h-[64px] align-middle pl-2">
                    <span
                      className="inline-block animate-scrollText"
                      style={{
                        fontFamily: 'Monomaniac One',
                      }}
                    >
                      <span className="block text-[32px] sm:text-[48px] md:text-[56px] lg:text-[63px] text-[#5e81ff] capitalize leading-none">
                        Lorem Ipsum
                      </span>

                      <span className="block mt-4 text-[32px] sm:text-[48px] md:text-[56px] lg:text-[63px] text-[#5e81ff] capitalize leading-none">
                        Lorem Ipsum
                      </span>
                    </span>
                  </span>
                </h1>
              </div>

              <div className="relative w-full mt-[-22px] sm:mt-[-32px] lg:mt-[-44px]">
                <div className="flex justify-center items-end self-center w-full sm:w-[60%] lg:w-[40%] p-3">
                  <div className="flex flex-col justify-start items-start mt-[66px] sm:mt-[99px] lg:mt-[132px] h-24">
                    <div
                      className="absolute z-30 transition-transform duration-300 ease-out flex items-start"
                      style={{
                        animation: 'float 4s ease-in-out infinite',
                        willChange: 'transform',
                      }}
                    >
                      <Image
                        src="/images/img_cursor_icon_left.svg"
                        alt="Cursor Icon"
                        width={24}
                        height={24}
                        className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] mt-4"
                      />
                      <div className="flex justify-center items-center shadow-[0px_4px_8px_#ffa62951] border border-[#5e81ff] rounded-[12px_16px_1px_16px] bg-[#5e81ff] px-2 py-2">
                        <span
                          className="text-xs font-normal leading-[15px] text-[#fafafa]"
                          style={{ fontFamily: 'Roboto' }}
                        >
                          Sustainable Growth
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-full flex justify-end items-end pb-4">
                  <div
                    className="transition-transform duration-300 ease-out flex flex-col items-end"
                    style={{
                      willChange: 'transform',
                      animation: 'float 4s ease-in-out infinite 0.5s',
                      marginRight: '10%',
                    }}
                  >
                    <div className="flex justify-center items-center shadow-[0px_4px_8px_#ffa62951] border border-[#5e81ff] rounded-[12px_16px_1px_16px] bg-[#5e81ff] px-2 py-2">
                      <span
                        className="text-xs font-normal leading-[15px] text-[#fafafa]"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        Comprehensive Support
                      </span>
                    </div>
                    <Image
                      src="/images/img_cursor_icon_left.svg"
                      alt="Cursor Icon"
                      width={24}
                      height={24}
                      className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] mt-[-4px] mr-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-8 mt-8 sm:mt-12 lg:mt-16 mb-[44px] sm:mb-[66px] lg:mb-[88px] px-2 relative z-20">
              <Button
                text="Learn More"
                text_font_size="text-base"
                text_font_family="Poppins"
                text_font_weight="font-semibold"
                text_color="text-[#f4fcff]"
                onClick={handleLearnMore}
                className="w-full sm:w-auto"
                layout_width="auto"
                position="relative"
                variant="primary"
                size="medium"
                border_border="border border-transparent"
                effect_box_shadow="none"
                padding="12px 24px"
                margin="0"
              />

              <button
                onClick={handleWatchVideo}
                className={`text-base font-semibold leading-relaxed transition-colors duration-200 ml-0 sm:ml-[30px] ${
                  watchVideoClicked ? 'text-[#5e81ff]' : 'text-[#e9edf8] hover:text-[#5e81ff]'
                }`}
                style={{ fontFamily: 'Poppins' }}
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0px, 0px);
          }
          25% {
            transform: translate(5px, -10px);
          }
          50% {
            transform: translate(-5px, -15px);
          }
          75% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
        @keyframes float-alt {
          0% {
            transform: translate(0px, 0px);
          }
          25% {
            transform: translate(-5px, -12px);
          }
          50% {
            transform: translate(5px, -8px);
          }
          75% {
            transform: translate(-3px, 0px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
      `}</style>
    </section>
  );
}
