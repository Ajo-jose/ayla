"use client"
import { useEffect } from "react"
import { Search, ArrowDown, ArrowRight, X } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import news from "../../lib/effects/news"
import "./news.css"

const topics = ["Residences", "Sustainability", "Marina", "Golf", "Community & Events"]

export default function NewsPage() {
  useEffect(() => news(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="nw">
        <section className="nw-hero" data-screen-label="News hero">
          <video src="/assets/news-hero.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          <div className="nw-tint" />
          <div className="nw-hin">
            <h1 id="nw-h1"><span className="nw-l"><span className="lr">News &amp;</span></span><span className="nw-l"><span className="lr"><em className="sw-serif">updates</em></span></span></h1>
            <div className="nw-side rv-up"><p>The latest news and developments at Ayla.</p></div>
          </div>
        </section>
        <div className="nw-barwrap" data-screen-label="Filters">
          <div className="nw-bar">
            <div className="nw-tabs" role="tablist" aria-label="Story type">
              <span className="nw-ind" aria-hidden="true" />
              <button role="tab" aria-selected="true" data-type="all">All</button>
              <button role="tab" aria-selected="false" data-type="Press release">Press releases</button>
              <button role="tab" aria-selected="false" data-type="Inspiration">Inspiration</button>
            </div>
            <span className="nw-div" aria-hidden="true" />
            <div className="nw-chips" aria-label="Topics">
              {topics.map(t => (
                <button key={t} className="nw-chip" aria-pressed="false" data-topic={t}>{t}<X aria-hidden="true" /></button>
              ))}
            </div>
            <label className="nw-search"><Search aria-hidden="true" /><span className="sw-sr">Search news</span><input id="nw-q" type="search" placeholder="Search news" /></label>
          </div>
        </div>
        <section className="nw-list" aria-label="News stories" data-screen-label="Stories">
          <div id="nw-grid" className="nw-grid" />
          <div id="nw-empty" className="nw-empty" hidden><h3>No stories match</h3><p>Try another topic or clear your search.</p><button className="nw-loadbtn" id="nw-clear">Clear filters</button></div>
          <div id="nw-more" className="nw-more"><button id="nw-load" className="nw-loadbtn">Load more<ArrowDown aria-hidden="true" /></button><div className="nw-prog" aria-hidden="true"><span id="nw-pbar" /></div><p id="nw-count" className="nw-count" role="status">Showing 10 of 132</p></div>
        </section>
        <section className="nw-sub" data-screen-label="Newsletter"><h2>Get news and updates from Ayla in your <em className="sw-serif">inbox</em>.</h2>
          <form className="nw-sform" onSubmit={e => { e.preventDefault(); (e.currentTarget.querySelector(".nw-sok") as HTMLElement).hidden = false; e.currentTarget.reset() }}>
            <label className="sw-sr" htmlFor="nw-email">Email address</label>
            <input id="nw-email" type="email" required placeholder="Email address" autoComplete="email" />
            <button className="nw-btn" type="submit">Subscribe<ArrowRight aria-hidden="true" /></button>
            <p className="nw-sok" role="status" hidden>Thanks, you’re on the list.</p>
          </form></section>
      </main>
      <Footer />
    </div>
  )
}
