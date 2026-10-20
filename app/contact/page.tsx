import type { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = { title: 'Ayla — Contact us' }

export default function Page() {
  return <ContactPage />
}
