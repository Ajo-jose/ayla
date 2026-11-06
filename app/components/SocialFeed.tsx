import { Instagram } from 'lucide-react'
import './social-feed.css'

const posts = [
  ['/assets/4832270e23473a056a719250ca0b381a.jpg', 'Paddleboarding on the marina'],
  ['/assets/c4a023d5c6e76ebbeba11c362135d2e9.jpg', 'Dining at Ayla'],
  ['/assets/2882b24b799ca7a4515f17d6e845880f.jpg', 'A walk along the promenade'],
  ['/assets/0eedfcae95800cf90c8e055d017aac34.jpg', 'Balcony view over the sea'],
  ['/assets/whatson-fire.png', 'Fire performance at night'],
  ['/assets/golf-tee.jpg', 'Tee time at Ayla Golf Club'],
]

export default function SocialFeed() {
  return (
    <section className="sf" data-screen-label="Social feed" aria-labelledby="sf-h">
      <div className="sf-head">
        <h2 id="sf-h" className="vp-h2">Follow us <em className="sw-serif">@ayla</em></h2>
        <a className="wo-all" href="#" aria-label="Follow Ayla on Instagram"><Instagram aria-hidden="true" />Follow on Instagram</a>
      </div>
      <div className="sf-grid">
        {posts.map(([src, alt], i) => (
          <a key={src} className="sf-p" style={{ ['--d' as string]: i } as React.CSSProperties} href="#" aria-label={alt}>
            <img src={src} alt="" loading="lazy" />
            <span className="sf-o" aria-hidden="true"><Instagram /></span>
          </a>
        ))}
      </div>
    </section>
  )
}
