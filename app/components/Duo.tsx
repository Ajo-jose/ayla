
export default function Duo() {
  return (
    <>
<section id="duo" aria-label="Weddings and events" data-screen-label="Weddings & events" style={{ position: "relative", zIndex: "10", width: 1440, height: 820, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--ayla-deep)", fontFamily: "'F37 Ginger', 'Urbanist', system-ui, sans-serif" }}>
<article className="we-panel" aria-labelledby="we-h1"><video src="/assets/duo-bg.mp4" autoPlay muted loop playsInline aria-hidden="true" /><div className="we-tint" aria-hidden="true" /><div className="we-text"><h3 id="we-h1">Weddings @ Ayla</h3><p>Body copy goes here &mdash; one or two sentences of intro for this section. Replace with real words once the content is written.</p><a href="#" className="we-btn">Weddings @ Ayla</a></div></article>
<article className="we-panel" aria-labelledby="we-h2"><video src="/assets/events-bg.mp4" autoPlay muted loop playsInline aria-hidden="true" /><div className="we-tint" aria-hidden="true" /><div className="we-text"><h3 id="we-h2">Events</h3><p>Body copy goes here &mdash; one or two sentences of intro for this section. Replace with real words once the content is written.</p><a href="#" className="we-btn">Events</a></div></article>
<svg id="we-clouds" aria-hidden="true" width="1440" height="820" viewBox="0 0 1440 820" style={{ position: "absolute", left: "0", top: "0", zIndex: "5", pointerEvents: "none" }}><defs><mask id="weHoles" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="820"><rect width="1440" height="820" fill="#fff" /><g id="we-puffs" filter="url(#cloudEdge)" fill="#000" /></mask></defs><rect width="1440" height="820" fill="#ffffff" mask="url(#weHoles)" /><g id="we-wisps" fill="#ffffff" filter="url(#cloudEdge)" /></svg>
</section>
    </>
  )
}
