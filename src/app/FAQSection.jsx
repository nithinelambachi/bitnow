'use client';
import { useState } from 'react';
 import Image from'next/image';

export default function FAQSection({ loading }) {
  const [expandedItem, setExpandedItem] = useState(0)

  const faqItems = [
    {
      id: 0,
      question: 'What is your favorite template from BRIX Templates?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
      expanded: true
    },
    {
      id: 1,
      question: 'What is your favorite template from BRIX Templates?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
      expanded: false
    },
    {
      id: 2,
      question: 'What is your favorite template from BRIX Templates?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
      expanded: false
    },
    {
      id: 3,
      question: 'What is your favorite template from BRIX Templates?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
      expanded: false
    }
  ]

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? -1 : id)
  }

  return (
    <section className="w-full bg-[#e4e4e42d] rounded-[40px] mx-4 sm:mx-8 lg:mx-14">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[40px] justify-start items-center">
          
          <div className="flex flex-col gap-[14px] sm:gap-[21px] lg:gap-[28px] justify-start items-center w-full max-w-[600px] lg:max-w-[48%]">
            <h2 
              className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal leading-[35px] sm:leading-[46px] lg:leading-[58px] text-white text-center"
              style={{ fontFamily: 'Monomaniac One' }}
            >
              Most Trusted Cryptocurrency Platform
            </h2>
            
            <p 
              className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white text-center w-full"
              style={{ fontFamily: 'Poppins' }}
            >
              Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus .
            </p>
          </div>

          <div className="w-full max-w-[1000px] bg-[#5d767e] rounded-[24px] p-4 sm:p-6 lg:p-6">
            {loading ? (
              <div className="flex flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px] animate-pulse">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="h-8 bg-gray-600 rounded w-3/4"></div>
                    {index === 0 && <div className="h-16 bg-gray-600 rounded w-full mt-4"></div>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px]">
                {faqItems.map((item, index) => (
                  <div key={item.id} className="flex flex-col gap-[6px]">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="flex justify-start items-start w-full text-left hover:opacity-80 transition-opacity duration-200"
                      aria-expanded={expandedItem === item.id}
                    >
                      <Image
                        src={expandedItem === item.id ? "/images/img_minus_svgrepo_com.svg" : "/images/img_plus_large_svgrepo_com.svg"}
                        alt={expandedItem === item.id ? "Collapse" : "Expand"}
                        width={24}
                        height={24}
                        className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] mt-1 flex-shrink-0"
                      />
                      <h3 
                        className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium leading-[26px] sm:leading-[28px] lg:leading-[30px] text-black ml-4 sm:ml-6"
                        style={{ fontFamily: 'Open Sans' }}
                      >
                        {item.question}
                      </h3>
                    </button>

                    {expandedItem === item.id && item.answer && (
                      <div className="ml-8 sm:ml-10 mt-4 animate-fadeIn">
                        <p 
                          className="text-base sm:text-lg font-normal leading-[26px] sm:leading-[30px] text-[#252424]"
                          style={{ fontFamily: 'Open Sans' }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}