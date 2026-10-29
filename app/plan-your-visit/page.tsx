import type { Metadata } from 'next'
import PlanVisitPage from './PlanVisitPage'

export const metadata: Metadata = { title: 'Ayla — Plan your visit' }

export default function Page() {
  return <PlanVisitPage />
}
