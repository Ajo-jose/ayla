'use client'
import { useEffect, useRef, useState } from 'react'
import AylaLogo from './components/AylaLogo'
import { initAll } from '../lib/effects'

const IMAGES = [
  '4832270e23473a056a719250ca0b381a', 'f4822b32b0f04051c7d830b02ae78b89', '0eedfcae95800cf90c8e055d017aac34',
  '0b58776450154823f45c3cb8e042f9b3', '2882b24b799ca7a4515f17d6e845880f', '031dabd9dac523b90a61e21f2bafb3d5',
  'c4a023d5c6e76ebbeba11c362135d2e9', 'a53e791093aa902d295aef552ec7dfd6',
].map((h) => `/assets/${h}.png`).concat(['/assets/whatson-fire.png', '/assets/location-map.jpg', '/assets/ayla-app.jpg'])
const VIDEOS = ['oasis', 'live', 'duo-bg', 'events-bg', 'footer-bg'].map((n) => `/assets/${n}.mp4`)
const MIN_MS = 1400
const MAX_MS = 20000

// Streams every heavy asset into the HTTP cache and reports real byte progress (0..1).
async function preload(onProgress: (p: number) => void) {
  const urls = [...VIDEOS, ...IMAGES]
  const total = new Map<string, number>()
  const got = new Map<string, number>()
  const report = () => {
    let t = 0, g = 0
    urls.forEach((u) => { t += total.get(u) || 1_000_000; g += Math.min(got.get(u) || 0, total.get(u) || 1_000_000) })
    onProgress(Math.min(1, g / t))
  }
  await Promise.all(urls.map(async (u) => {
    try {
      const r = await fetch(u, { cache: 'force-cache' })
      total.set(u, Number(r.headers.get('content-length')) || 1_000_000)
      const reader = r.body?.getReader()
      if (!reader) { await r.blob(); got.set(u, total.get(u)!); return report() }
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        got.set(u, (got.get(u) || 0) + value.length)
        report()
      }
      got.set(u, total.get(u)!)
    } catch { got.set(u, total.get(u) || 1_000_000) }
    report()
  }))
  if (document.fonts?.ready) await document.fonts.ready
  onProgress(1)
}

export default function Preloader() {
  const [shown, setShown] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)
  const real = useRef(0)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t0 = performance.now()
    let done = false, raf = 0, cur = 0

    const tick = () => {
      const cap = done ? 1 : Math.min(real.current, 0.99)
      cur += (cap - cur) * 0.08
      if (cap - cur < 0.002) cur = cap
      setShown(cur)
      if (done && cur >= 1) { finish(); return }
      raf = requestAnimationFrame(tick)
    }
    const finish = () => {
      document.body.style.overflow = prevOverflow
      window.scrollTo(0, 0)
      initAll() // effects start only once assets are warm
      setLeaving(true)
      setTimeout(() => setGone(true), 1100)
    }
    const release = () => { if (!done && performance.now() - t0 >= MIN_MS) done = true }
    const gate = setInterval(release, 100)
    const cap = setTimeout(() => { done = true }, MAX_MS)
    preload((p) => { real.current = p }).then(() => { real.current = 1; release() })
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); clearInterval(gate); clearTimeout(cap); document.body.style.overflow = prevOverflow }
  }, [])

  if (gone) return null
  const n = Math.round(shown * 100)
  return (
    <div id="preloader" className={leaving ? 'pl-out' : ''} role="status" aria-live="polite" aria-label={`Loading ${n}%`}>
      <noscript><style>{'#preloader{display:none!important}'}</style></noscript>
      <div className="pl-logo"><AylaLogo width={132} /></div>
      <div className="pl-num" aria-hidden="true"><span>{n}</span><em>%</em></div>
      <p className="pl-copy">Preparing your seaside escape — loading the videos and motion so everything plays smoothly.</p>
      <div className="pl-bar" aria-hidden="true"><span style={{ transform: `scaleX(${shown})` }} /></div>
    </div>
  )
}
