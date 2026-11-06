import type { Metadata } from 'next'
import EventsPage from './EventsPage'

export const metadata: Metadata = { title: 'Ayla — Events at Ayla' }

export default function Page() {
  return <EventsPage />
}
