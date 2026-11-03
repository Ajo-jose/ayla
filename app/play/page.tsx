import type { Metadata } from 'next'
import PlayPage from './PlayPage'

export const metadata: Metadata = { title: 'Ayla — Play' }

export default function Page() {
  return <PlayPage />
}
