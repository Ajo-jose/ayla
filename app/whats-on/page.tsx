import type { Metadata } from 'next'
import WhatsOnPage from './WhatsOnPage'

export const metadata: Metadata = { title: 'Ayla — What’s on' }

export default function Page() {
  return <WhatsOnPage />
}
