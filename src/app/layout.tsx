import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://abhinesh-portfolio.vercel.app'),
  title: 'Abhinesh Singh - Data Scientist | AI Engineer | Innovator',
  description: 'Next-generation AI portfolio showcasing expertise in Data Science, Machine Learning, AI Development, and Generative AI. Building intelligent systems that see, think, and act.',
  keywords: ['Data Science', 'Machine Learning', 'AI Engineer', 'Python', 'YOLOv8', 'Deep Learning', 'Generative AI'],
  authors: [{ name: 'Abhinesh Singh' }],
  creator: 'Abhinesh Singh',
  openGraph: {
    title: 'Abhinesh Singh - AI Engineer & Data Scientist',
    description: 'Innovative AI portfolio with interactive demos and cutting-edge projects',
    url: 'https://abhinesh-portfolio.vercel.app',
    siteName: 'Abhinesh Singh Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abhinesh Singh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhinesh Singh - AI Engineer & Data Scientist',
    description: 'Innovative AI portfolio with interactive demos and cutting-edge projects',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="particles" id="particles-js"></div>
        {children}
      </body>
    </html>
  )
}
