import { services } from '@/data/services'
import { Card } from '@/components/ui/Card'

export function Services() {
  return (
    <section id="services" className="border-t border-theme-border bg-theme-card/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <span className="text-xs font-semibold uppercase tracking-widest text-theme-accent">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Services tailored to your goals.
          </h2>
          <p className="mt-3 text-theme-muted">
            From concept to launch, we provide end-to-end services to bring your vision to life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.title} data-aos="fade-up" data-aos-delay={i * 80}>
              <Card icon={service.icon} title={service.title} description={service.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
