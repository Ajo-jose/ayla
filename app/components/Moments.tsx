
export default function Moments() {
  return (
    <>
<section id="moments" aria-labelledby="mo-h" data-screen-label="Play at Ayla" style={{ position: "relative", zIndex: "10", width: 1440, height: 745, overflow: "hidden", background: "var(--ayla-deep)", color: "#ffffff", fontFamily: "'F37 Ginger', 'Urbanist', system-ui, sans-serif" }}>
<h2 id="mo-h" className="mo-h">Play at Ayla</h2>
<div className="mo-ctrl"><button id="mo-prev" className="mo-arrow" aria-label="Previous activity"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg></button><button id="mo-next" className="mo-arrow" aria-label="Next activity"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button><a href="#" className="mo-all">All activities</a></div>
<div id="mo-ring" className="mo-ring" tabIndex={0} role="group" aria-roledescription="carousel" aria-label="Activities. Drag or use the arrow keys to browse." />

</section>
    </>
  )
}
