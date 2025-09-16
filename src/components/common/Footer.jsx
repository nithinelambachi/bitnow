'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');

  const otherPagesLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Token Sale', href: '/token-sale' },
    { name: 'Contact', href: '/contact' }
  ]

  const quickLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Term Of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Credits', href: '/credits' },
    { name: 'FAQ', href: '/faq' }
  ]

  const bottomLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Notice at Collection', href: '/notice' },
    { name: 'Terms', href: '/terms' },
    { name: 'Copyright © 2023 Atlassian', href: '/copyright' }
  ]

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log('Subscribing email:', email)
      setEmail('')
    }
  }

  return (
    <footer className="w-full bg-[linear-gradient(0deg,#1f5464_0%,#091c2300_100%)]">
      <div className="w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 pt-8 lg:pt-[34px]">
          <div className="flex flex-col gap-[110px] w-full lg:w-[16%]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-[10px] justify-center items-start self-center">
            <Link href="/" className="flex gap-[10px] items-center">
              <Image
                src="/images/img_bitcoin_coin_ex.svg"
                alt="BitNow Logo"
                width={40}
                height={40}
                className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
              />
              <h1 
                className="text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[35px] sm:leading-[40px] md:leading-[47px] text-primary-light self-center"
                style={{ fontFamily: 'Monomaniac One' }}
              >
                BitNow
              </h1>
            </Link>
          </div>
              <p className="text-sm font-medium leading-[22px] text-white w-full" style={{ fontFamily: 'Raleway' }}>
                Lorem Ipsum, jhdjnfnj Htehiuijnerv
              </p>
            </div>
            
            <div className="flex justify-between items-center gap-4 max-w-[200px]">
              <Image
                src="/images/img_vector.svg"
                alt="Social Icon"
                width={40}
                height={40}
                className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] hover:opacity-80 transition-opacity cursor-pointer"
              />
              <Image
                src="/images/img_group.svg"
                alt="Social Icon"
                width={40}
                height={40}
                className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-[20px] hover:opacity-80 transition-opacity cursor-pointer"
              />
              <Image
                src="/images/img_vector_indigo_a200.svg"
                alt="Social Icon"
                width={40}
                height={40}
                className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-[20px] hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 w-full lg:w-[70%]">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-0 w-full md:w-[46%]">
              <div className="flex flex-col gap-[22px] w-full sm:w-[60%]">
                <h3 className="text-xl font-semibold leading-[30px] text-primary-light" style={{ fontFamily: 'Poppins' }}>
                  Other Pages
                </h3>
                <ul className="flex flex-col gap-[18px]">
                  {otherPagesLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="flex gap-[10px] items-center hover:text-primary-background transition-colors duration-200"
                        role="menuitem"
                      >
                        <Image
                          src="/images/img_chevron_left_black_24dp.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                        />
                        <span className="text-base font-semibold leading-[19px] text-primary-light" style={{ fontFamily: 'Raleway' }}>
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-[22px] w-full sm:w-auto">
                <h3 className="text-xl font-semibold leading-[30px] text-primary-light" style={{ fontFamily: 'Poppins' }}>
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-[18px]">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="flex gap-[10px] items-center hover:text-primary-background transition-colors duration-200"
                        role="menuitem"
                      >
                        <Image
                          src="/images/img_chevron_left_black_24dp.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                        />
                        <span className="text-base font-semibold leading-[19px] text-primary-light" style={{ fontFamily: 'Raleway' }}>
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] w-full md:w-[40%]">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold leading-[30px] text-primary-light" style={{ fontFamily: 'Poppins' }}>
                  Newsletter
                </h3>
                <p className="text-base font-medium leading-[25px] text-accent-light w-full" style={{ fontFamily: 'Raleway' }}>
                  At habitant maecenas lacus adipiscing non. Accumsan etiam non praesent
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5e81ff] focus:border-transparent transition-colors duration-200"
                />
                <Button
                  text="Subscribe"
                  text_color="text-primary-dark"
                  onClick={handleSubscribe}
                  className="mr-0 sm:mr-[20px] w-full sm:w-auto"
                  border_border=""
                  effect_box_shadow=""
                  layout_width="auto"
                  padding="default"
                  position="relative"
                  margin="0"
                  variant="primary"
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[14px] items-center mt-12 lg:mt-16">
          <div className="w-full h-[2px] sm:h-[3px] bg-[#d7f5ff0a]"></div>
          
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-0 w-full py-4 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 w-full lg:w-[86%] px-0 lg:px-[56px]">
              <div className="flex justify-between items-center gap-4 lg:gap-0 w-full lg:w-[14%]">
                <div className="flex gap-3 items-center">
                  <Image
                    src="/images/img_language_black_24dp.svg"
                    alt="Language"
                    width={24}
                    height={24}
                    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                  />
                  <span className="text-base font-semibold leading-[19px] text-primary-light" style={{ fontFamily: 'Raleway' }}>
                    Cestina
                  </span>
                </div>
                <Image
                  src="/images/img_chevron_left_black_24dp_light_blue_50.svg"
                  alt="Dropdown"
                  width={24}
                  height={24}
                  className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                />
              </div>

              <ul className="flex flex-col sm:flex-row gap-4 sm:gap-[30px] items-center">
                {bottomLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium leading-[17px] text-primary-light hover:text-primary-background transition-colors duration-200"
                      style={{ fontFamily: 'Raleway' }}
                      role="menuitem"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer