import type { Metadata } from 'next'
import WeddingsPage from './WeddingsPage'

export const metadata: Metadata = { title: 'Ayla — Weddings at Ayla' }

export default function Page() {
  return <WeddingsPage />
}
