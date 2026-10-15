import hero from './hero'
import foldClouds from './foldClouds'
import foldTitle from './foldTitle'
import foldReveal from './foldReveal'
import foldVideo from './foldVideo'
import foldCopy from './foldCopy'
import stayStrip from './stayStrip'
import stayClouds from './stayClouds'
import stayIntro from './stayIntro'
import moments from './moments'
import live from './live'
import stack from './stack'
import duoClouds from './duoClouds'
import whatsOn from './whatsOn'
import cardCursor from './cardCursor'

let started = false
export function initAll() {
  if (started) return
  started = true
  hero()
  foldClouds()
  foldTitle()
  foldReveal()
  foldVideo()
  foldCopy()
  stayStrip()
  stayClouds()
  stayIntro()
  moments()
  live()
  stack()
  duoClouds()
  whatsOn()
  cardCursor()
}
