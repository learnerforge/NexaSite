import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
