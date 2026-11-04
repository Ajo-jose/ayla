import type { Metadata } from 'next'
import LivePage from './LivePage'

export const metadata: Metadata = { title: 'Ayla — Live at Ayla Oasis' }

export default function Page() {
  return <LivePage />
}
