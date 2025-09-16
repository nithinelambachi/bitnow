'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function TrustedPlatformSection({ loading }) {
  const [hoveredImage, setHoveredImage] = useState(null);

  const platformImages = [
    { 
      src: '/images/img_rectangle_4483.png', 
      alt: 'Trading Platform Interface 1',
      title: 'Lorem Ipsum',
      description: 'Est quisque interdum gravida dui. Egestas morbi maecenas eu massa.'
    },
    { 
      src: '/images/img_rectangle_4483.png', 
      alt: 'Trading Platform Interface 2',
      title: 'Lorem Ipsum',
      description: 'Est quisque interdum gravida dui. Egestas morbi maecenas eu massa.'
    },
    { 
      src: '/images/img_rectangle_4483.png', 
      alt: 'Trading Platform Interface 3',
      title: 'Lorem Ipsum',
      description: 'Est quisque interdum gravida dui. Egestas morbi maecenas eu massa.'
    }
  ];

  const handleImageHover = (index) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <section className="w-full bg-[linear-gradient(180deg,#091c234c_0%,#0740524c_50%,#091c234c_100%)]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-[30px] sm:gap-[45px] lg:gap-[60px] justify-start items-center">
          
          <div className="flex flex-col gap-[14px] sm:gap-[21px] lg:gap-[28px] justify-start items-center w-full max-w-[600px] lg:max-w-[44%]">
            <h2 
              className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[35px] sm:leading-[46px] lg:leading-[58px] text-[#e9edf8] text-center whitespace-nowrap"
              style={{ fontFamily: 'Monomaniac One' }}
            >
              Most Trusted Cryptocurrency Platform
            </h2>
            
            <p 
              className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#e9edf8] text-center w-full"
              style={{ fontFamily: 'Poppins' }}
            >
              Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus .
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[23px] sm:gap-[35px] lg:gap-[46px] w-full max-w-[1200px] lg:w-[88%]">
            {loading ? (
              <>
                {[...Array(3)]?.map((_, index) => (
                  <div 
                    key={index}
                    className="flex flex-col justify-start items-center w-full lg:w-[372px] animate-pulse"
                  >
                    <div className="w-full h-[300px] sm:h-[400px] lg:h-[494px] bg-gray-600 rounded-[24px]"></div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {platformImages?.map((image, index) => (
                  <div 
                    key={index}
                    className="flex flex-col justify-start items-center w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 lg:w-[372px] relative group"
                    onMouseEnter={() => handleImageHover(index)}
                    onMouseLeave={handleImageLeave}
                  >
                    <Image
                      src={image?.src}
                      alt={image?.alt}
                      width={372}
                      height={494}
                      className="w-full h-auto rounded-[24px] transition-all duration-300"
                      priority={index === 0}
                    />
                    
                    {hoveredImage === index && (
                      <div 
                        className="absolute inset-0 flex flex-col justify-end items-center text-center px-8 pt-8"
                        style={{
                          opacity: 0,
                          transform: 'translateY(20px)',
                          animation: 'fadeInUp 0.4s ease-out forwards'
                        }}
                      >
                        <h4 
                          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          {image?.title}
                        </h4>
                        <p 
                          className="text-base sm:text-lg text-white leading-relaxed max-w-[280px]"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          {image?.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </section>
  );
}