import type { Metadata } from 'next'
import DinePage from './DinePage'

export const metadata: Metadata = { title: 'Ayla — Dine' }

export default function Page() {
  return <DinePage />
}
