import type { Metadata } from 'next'
import NewsPage from './NewsPage'

export const metadata: Metadata = { title: 'Ayla — News & updates' }

export default function Page() {
  return <NewsPage />
}
