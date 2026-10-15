// Custom white "Explore" cursor for the Stay and Live cards (the in-card buttons are visually hidden).
export default function cardCursor() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
  const el = document.createElement('div')
  el.className = 'card-cursor'
  el.setAttribute('aria-hidden', 'true')
  document.body.appendChild(el)
  const SEL = '.sw-img, .lv-img'
  let x = 0, y = 0, cx = 0, cy = 0, on = false, raf = 0
  const tick = () => {
    cx += (x - cx) * 0.2
    cy += (y - cy) * 0.2
    el.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%) scale(${on ? 1 : 0})`
    raf = requestAnimationFrame(tick)
  }
  addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY
    const card = (e.target as Element | null)?.closest?.(SEL) as HTMLElement | null
    if (card) {
      if (!on) { cx = x; cy = y }
      el.textContent = card.querySelector('a')?.textContent?.trim() || 'Explore'
    }
    on = !!card
  }, { passive: true })
  document.addEventListener('pointerleave', () => { on = false })
  raf = requestAnimationFrame(tick)
}
