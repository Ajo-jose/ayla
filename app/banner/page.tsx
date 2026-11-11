import type { Metadata } from 'next'
import BannerPage from './BannerPage'

export const metadata: Metadata = { title: 'Ayla — Banner options' }

export default function Page() {
  return <BannerPage />
}
