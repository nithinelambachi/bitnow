'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Page', href: '/page' },
    { name: 'News', href: '/news' },
    { name: 'Contact Us', href: '/contact' }
  ]

  return (
    <header className="w-full bg-secondary-background">
      <div className="w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start py-3 md:py-4">
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

          <nav className="hidden lg:flex gap-[28px] justify-center items-center">
            <div className="flex gap-[50px] justify-center items-center">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-base font-medium leading-relaxed transition-colors duration-200 hover:text-primary-background ${
                    item.active 
                      ? 'text-primary-background font-semibold' :'text-primary-light'
                  }`}
                  style={{ fontFamily: 'Poppins' }}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <Button
              text="Get Started"
              className="mt-1"
              onClick={() => console.log('Get Started clicked')}
              border_border=""
              effect_box_shadow=""
              layout_width=""
              padding=""
              position=""
              margin=""
              variant=""
              size=""
            />
          </nav>

          <button
            className="lg:hidden p-2 text-primary-light hover:text-primary-background transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-base font-medium leading-relaxed py-2 px-4 rounded transition-colors duration-200 hover:bg-primary-background hover:text-primary-foreground ${
                  item.active 
                    ? 'text-primary-background font-semibold bg-primary-light' :'text-primary-light'
                }`}
                style={{ fontFamily: 'Poppins' }}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-2">
              <Button
                text="Get Started"
                className="w-full"
                onClick={() => {
                  setMenuOpen(false)
                  console.log('Get Started clicked')
                }}
                border_border=""
                effect_box_shadow=""
                layout_width=""
                padding=""
                position=""
                margin=""
                variant=""
                size=""
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header