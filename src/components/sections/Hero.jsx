import { ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GridBackground } from '@/components/ui/GridBackground'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center"
    >
      <GridBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-theme-accent/5 to-transparent" />

      <span
        className="mb-4 inline-block rounded-full border border-theme-border bg-theme-card px-4 py-1.5 text-xs font-medium text-theme-muted"
        data-aos="fade-down"
      >
        Modern Business Solutions
      </span>

      <h1
        className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Build a digital presence that{' '}
        <span className="text-theme-accent">stands out</span>.
      </h1>

      <p
        className="mt-4 max-w-xl text-base leading-relaxed text-theme-muted sm:text-lg"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        NexaSite helps businesses, freelancers, and creators launch beautiful, responsive websites — fast.
      </p>

      <div
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Button size="lg" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>
          Our Services
          <ArrowRight size={18} />
        </Button>
        <Button variant="outline" size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Get in Touch
        </Button>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 animate-bounce text-theme-muted transition-colors hover:text-theme-text"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
