import Preloader from './Preloader'
import Hero from './components/Hero'
import Fold2 from './components/Fold2'
import Stay from './components/Stay'
import Moments from './components/Moments'
import Live from './components/Live'
import Stack from './components/Stack'
import Duo from './components/Duo'
import WhatsOn from './components/WhatsOn'
import Featured from './components/Featured'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div id="page" style={{ position: 'relative', width: 1440, background: '#ffffff' }}>
        <Hero />
        <Fold2 />
        <Stay />
        <Moments />
        <Live />
        <Stack />
        <Duo />
        <WhatsOn />
        <Featured />
        <Footer />
      </div>
      <Preloader />
    </>
  )
}
