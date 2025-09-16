import '../styles/index.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: {
    default: 'BitNow - Cryptocurrency Trading Platform',
    template: 'BitNow | %s',
  },
  description: 'BitNow is your trusted cryptocurrency trading platform. Trade Bitcoin and digital currencies with confidence using our mobile-first interface, expert insights, and comprehensive trading tools.',
  keywords: 'cryptocurrency, bitcoin trading, digital currency, crypto platform, trading tools, blockchain',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'BitNow - Cryptocurrency Trading Platform',
      template: 'BitNow | %s',
    },
    description: 'Start your cryptocurrency journey with BitNow. Trade Bitcoin and digital currencies with expert guidance, mobile trading tools, and secure platform features.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<script type="module" src="#"></script>
</body>
    </html>
  )
}