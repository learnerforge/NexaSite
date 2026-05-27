import { ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GridBackground } from '@/components/ui/GridBackground'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-72px)] flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
    >
      <GridBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-theme-accent/5 to-transparent" />

      <div className="mx-auto w-full max-w-5xl text-center">
        <span
          className="inline-block rounded-full border border-theme-border bg-theme-card px-5 py-3 text-sm sm:text-base font-medium text-theme-muted"
          data-aos="fade-down"
        >
          Modern Business Solutions
        </span>

        <h1
          className="mt-8 text-[42px] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.12] sm:leading-[1.05] tracking-[-1.5px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Build a digital presence that{' '}
          <span className="text-theme-accent">stands out</span>.
        </h1>

        <p
          className="mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-theme-muted"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          NexaSite helps businesses, freelancers, and creators launch beautiful, responsive websites — fast.
        </p>

        <div
          className="mt-9 grid grid-cols-1 min-[420px]:grid-cols-2 gap-4 w-full max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Button size="lg" className="w-full h-14 rounded-xl" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>
            Our Services
            <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" className="w-full h-14 rounded-xl" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in Touch
          </Button>
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 p-3 animate-bounce text-theme-muted transition-colors hover:text-theme-text"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
