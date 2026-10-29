import "./awards-showcase.css"

const awards = [
  ["/assets/awards/award-1.png", "BUILD Architecture Awards 2026 — Winner, BUILD Excellence Award in Eco-Luxury Architecture 2026, Jordan"],
  ["/assets/awards/award-2.png", "BUILD Design & Build Awards 2026 — Winner, Sustainable Masterplanning & Destination Development Project of the Year 2026"],
  ["/assets/awards/award-3.png", "Sustainable Smart Marina"],
  ["/assets/awards/award-4.png", "Marina Awards 2026, The Yacht Harbour Association"],
]

export default function AwardsShowcase() {
  return (
    <section className="aw" aria-labelledby="aw-h" data-screen-label="Awards">
      <h2 id="aw-h">Awards &amp; <em className="sw-serif">recognition</em></h2>
      <p>Ayla is recognised for architecture, sustainable masterplanning and marina excellence.</p>
      <div className="aw-viewport">
        <ul className="aw-track" aria-label="Awards">
          {[0, 1, 2, 3, 4, 5].flatMap(r => awards.map(([src, alt]) => (
            <li key={r + src} aria-hidden={r > 0 ? true : undefined}><img src={src} alt={r === 0 ? alt : ""} draggable={false} /></li>
          )))}
        </ul>
      </div>
    </section>
  )
}
