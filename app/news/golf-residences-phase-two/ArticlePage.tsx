"use client"
import { useEffect } from "react"
import { ArrowLeft, Linkedin, Facebook, MessageCircle, Link as LinkIcon } from "lucide-react"
import SiteHeader from "../../components/SiteHeader"
import Footer from "../../components/Footer"
import article from "../../../lib/effects/article"
import "../news.css"

const related = [
  ["/assets/news/rel-1.jpg", "Press release", "1 Dec 2025", "Marina", "Marina Village welcomes five new retail brands for the season", "Five new fashion and lifestyle brands join Marina Village ahead of the winter season."],
  ["/assets/news/rel-2.jpg", "Press release", "20 Jan 2026", "Community & Events", "Ayla and RSCN / Aqaba Bird Observatory renew strategic partnership", "The renewed partnership continues joint conservation work along the wetland reserve behind the marina."],
  ["/assets/news/rel-3.jpg", "Press release", "15 Feb 2026", "Sustainability", "Ayla renews Blue Flag and Green Key certifications for the 2026–2027 season", "Independent auditors confirm Ayla’s beaches and marina continue to meet international environmental standards."],
]
const X = <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.75 3h3.07l-6.71 7.67L22 21h-6.18l-4.84-6.33L5.44 21H2.37l7.18-8.2L2 3h6.34l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.7H5.58l11.09 14.5Z" /></svg>

export default function ArticlePage() {
  useEffect(() => article(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader><span className="dt-prog" id="dt-prog" aria-hidden="true" /></SiteHeader>
      <main className="dt">
        <section className="dt-hero" data-screen-label="Article header">
          <div className="dt-top">
            <nav className="dt-crumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><a href="/news">News</a><span aria-hidden="true">›</span><span aria-current="page">Ayla news detail page</span></nav>
            <a className="dt-back" href="/news"><ArrowLeft aria-hidden="true" />All news/Blog</a>
          </div>
          <h1 id="dt-h1">Ayla launches Phase Two of Golf Residences and completes handover of Phase Two of Island Apartments</h1>
          <ul className="dt-meta"><li>Press release</li><li>28 Feb 2026</li><li>Residences</li><li>4 min read</li></ul>
        </section>
        <figure className="dt-fig" id="dt-fig" data-screen-label="Lead image">
          <div className="dt-fimg"><img src="/assets/news/article-hero.jpg" alt="Golf Residences, Phase Two" /></div>
          <figcaption>Golf Residences, Phase Two, overlooking the 14th fairway</figcaption>
        </figure>
        <article className="dt-body" id="dt-art" data-screen-label="Article body">
          <aside className="dt-rail"><div className="dt-sticky">
            <div><span className="dt-k">Share</span><ul className="dt-share">
              <li><button aria-label="Share on LinkedIn"><Linkedin aria-hidden="true" /></button></li>
              <li><button aria-label="Share on X">{X}</button></li>
              <li><button aria-label="Share on Facebook"><Facebook aria-hidden="true" /></button></li>
              <li><button aria-label="Share on WhatsApp"><MessageCircle aria-hidden="true" /></button></li>
              <li><button aria-label="Copy link" id="dt-copy"><LinkIcon aria-hidden="true" /></button></li>
            </ul></div>
            <div><span className="dt-k">Reading</span><div className="dt-rbar" aria-hidden="true"><span id="dt-rp" /></div><p className="dt-rmeta">4 min read</p></div>
          </div></aside>
          <div className="dt-text">
            <p className="dt-lede">Ayla today announced the launch of Phase Two of Golf Residences, alongside the completed handover of Phase Two of Island Apartments to its first owners. The milestones mark a significant step in the destination’s residential rollout, with both projects now fully integrated into the wider Ayla community.</p>
            <h2>A new phase of fairway living</h2>
            <p>Phase Two of Golf Residences introduces a further 64 apartments and townhouses overlooking the Ayla Golf Club fairways, with the same freehold ownership structure open to Jordanian and foreign buyers alike.</p>
            <figure className="dt-inline"><div className="dt-iimg"><img src="/assets/news/article-inline.jpg" alt="Interior of a Phase Two show unit" loading="lazy" /></div><figcaption>Inline image with caption — interior of a Phase Two show unit</figcaption></figure>
            <blockquote><p>“Phase Two reflects the same design language and quality our owners have come to expect from Ayla.”</p></blockquote>
            <h2>Island Apartments handover complete</h2>
            <p>Alongside the new launch, Ayla has completed handover of Phase Two of Island Apartments, with keys now delivered to owners on the private marina island. Berthing access for eligible units is included as standard.</p>
          </div>
        </article>
        <section className="dt-rel" data-screen-label="Related articles">
          <div className="dt-relhead"><h2>Related <em className="sw-serif">articles</em></h2><a className="wo-all" href="/news">All news</a></div>
          <div className="dt-relgrid" id="dt-rel">
            {related.map(([img, ty, d, tp, t, x]) => (
              <a key={t} className="nw-card" href="/news/golf-residences-phase-two">
                <div className="nw-img"><img src={img} alt="" loading="lazy" /><span className="nw-cur" aria-hidden="true">Read</span></div>
                <div className="nw-meta"><span>{ty}</span><i /><time>{d}</time><i /><span>{tp}</span></div>
                <h3><span>{t}</span></h3><p>{x}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <div className="dt-toast" id="dt-toast" role="status">Link copied</div>
      <Footer />
    </div>
  )
}
