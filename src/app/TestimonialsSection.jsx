'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const animationFrameRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Crypto Investor',
      avatar: '/images/img_rectangle_4476.png',
      content: 'Amazing trading platform experience.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Portfolio Manager',
      avatar: '/images/img_rectangle_4476_148x148.png',
      content: 'Professional grade cryptocurrency tools.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      title: 'Day Trader',
      avatar: '/images/img_rectangle_4476_1.png',
      content: 'Real-time analytics changed my trading.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.',
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Investment Advisor',
      avatar: '/images/img_rectangle_4476_2.png',
      content: 'Secure and reliable cryptocurrency platform.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      title: 'Blockchain Analyst',
      avatar: '/images/img_rectangle_4476.png',
      content: 'Advanced features for serious traders.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.',
    },
    {
      id: 6,
      name: 'James Miller',
      title: 'Cryptocurrency Expert',
      avatar: '/images/img_rectangle_4476_1.png',
      content: 'Best platform for institutional trading.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.',
    },
    {
      id: 7,
      name: 'Anna Schmidt',
      title: 'Market Researcher',
      avatar: '/images/img_rectangle_4476_2.png',
      content: 'Comprehensive market analysis tools.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.',
    },
    {
      id: 8,
      name: 'Robert Kim',
      title: 'Financial Advisor',
      avatar: '/images/img_rectangle_4476_148x148.png',
      content: 'Perfect for diversified crypto portfolios.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.',
    },
  ];

  useEffect(() => {
    const animate = () => {
      setScrollPosition((prev) => {
        const newPos = prev - 0.9;
        const cardWidth = 346;
        const totalWidth = testimonials?.length * cardWidth;

        return newPos <= -totalWidth ? 0 : newPos;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [testimonials.length]);

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex flex-col gap-[18px] justify-start items-center w-[330px] flex-shrink-0 bg-[#1f54644c] rounded-[24px] shadow-[8px_6px_30px_#00000028] hover:shadow-[8px_6px_40px_#00000040] transition-shadow duration-300 mx-2">
      <div className="flex flex-col gap-[14px] justify-start items-center w-[44%] mt-6">
        <div className="w-[148px] h-[148px] overflow-hidden rounded-[74px]">
          <Image
            src={testimonial?.avatar}
            alt={`${testimonial?.name} avatar`}
            width={148}
            height={148}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-[2px] justify-start items-center w-full">
          <h3
            className="text-base font-normal leading-[22px] text-white text-center"
            style={{ fontFamily: 'Open Sans' }}
          >
            {testimonial?.name}
          </h3>
          <p
            className="text-sm font-normal leading-[20px] text-[#f1f1f1] text-center"
            style={{ fontFamily: 'Open Sans' }}
          >
            {testimonial?.title}
          </p>
        </div>
      </div>

      <div className="relative w-full px-4 pb-6">
        <div className="absolute bottom-0 left-0 w-[105px] h-[126px]">
          <Image
            src="/images/Ellipse.png"
            alt="decorative ellipse"
            width={105}
            height={126}
            className="object-contain"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-2 justify-start items-center w-[76%] ml-auto">
          <p
            className="text-base font-normal leading-relaxed text-white w-full"
            style={{ fontFamily: 'Open Sans' }}
          >
            {testimonial?.content}
          </p>
          <p
            className="text-sm font-normal leading-relaxed text-[#f1f1f1] w-full"
            style={{ fontFamily: 'Open Sans' }}
          >
            {testimonial?.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full overflow-hidden bg-transparent">
      <div className="w-full py-8 sm:py-12 lg:py-16">
        <div className="relative">
          <div
            className="flex gap-4 will-change-transform"
            style={{
              transform: `translateX(${scrollPosition}px)`,
              width: 'max-content',
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials]?.map((testimonial, index) => (
              <TestimonialCard
                key={`testimonial-${testimonial?.id}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
