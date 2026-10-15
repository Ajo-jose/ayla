import type { Metadata } from 'next'
import './tokens.css'
import './globals.css'
import './ayla.css'

export const metadata: Metadata = { title: 'Ayla — Home' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;700;900&family=Cormorant+Garamond:ital,wght@1,500;1,700&family=Noto+Naskh+Arabic:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
