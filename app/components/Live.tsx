
export default function Live() {
  return (
    <>
<div id="livewrap" style={{ position: "relative", zIndex: "10", width: 1440, height: 3420 }}>
<section id="live" aria-labelledby="live-h" data-screen-label="Live" style={{ position: "sticky", top: "0", width: 1440, height: 820, overflow: "hidden", background: "var(--ayla-deep)", fontFamily: "'F37 Ginger', 'Urbanist', system-ui, sans-serif", color: "#ffffff" }}>
<video id="live-v" data-src="/assets/live.mp4" muted playsInline preload="auto" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
<div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse at center, rgba(0,63,107,.38), rgba(0,63,107,.12) 70%)" }} />
<div id="live-dim" aria-hidden="true" style={{ position: "absolute", inset: "0", background: "rgba(0,63,107,.55)", opacity: "0", zIndex: "1" }} />
<div id="live-content" className="lv-content"><div className="lv-grid"><article className="lv-card" data-i="0"><h3>Azure Beach Apartments</h3><p>Body copy goes here &mdash; one or two sentences of intro for this section. Replace with real words once the content is written.</p><div className="lv-img"><img src="/assets/4832270e23473a056a719250ca0b381a.png" alt="" draggable={false} /><a href="#" className="lv-explore" aria-label="Explore Azure Beach Apartments">Explore</a></div></article><article className="lv-card" data-i="1"><h3>Golf Residences</h3><p>Body copy goes here &mdash; one or two sentences of intro for this section. Replace with real words once the content is written.</p><div className="lv-img"><img src="/assets/2882b24b799ca7a4515f17d6e845880f.png" alt="" draggable={false} /><a href="#" className="lv-explore" aria-label="Explore Golf Residences">Explore</a></div></article><article className="lv-card" data-i="2"><h3>Island Apartments</h3><p>Body copy goes here &mdash; one or two sentences of intro for this section. Replace with real words once the content is written.</p><div className="lv-img"><img src="/assets/0eedfcae95800cf90c8e055d017aac34.png" alt="" draggable={false} /><a href="#" className="lv-explore" aria-label="Explore Island Apartments">Explore</a></div></article></div><div className="lv-bar" data-i="3"><a href="#" className="lv-book">Book a viewing</a></div></div>
<h2 id="live-h" className="live-h"><span>Live your</span> <em className="sw-serif">Ayla</em></h2>
<svg id="live-clouds" aria-hidden="true" width="1440" height="820" viewBox="0 0 1440 820" style={{ position: "absolute", left: "0", top: "0", zIndex: "5", pointerEvents: "none" }}><defs><mask id="liveHoles" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="820"><rect width="1440" height="820" fill="#fff" /><g id="live-puffs" filter="url(#cloudEdge)" fill="#000" /></mask></defs><rect width="1440" height="820" fill="#ffffff" mask="url(#liveHoles)" /><g id="live-wisps" fill="#ffffff" filter="url(#cloudEdge)" /></svg>
</section>
</div>
    </>
  )
}
