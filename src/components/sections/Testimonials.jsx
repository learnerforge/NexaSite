import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-theme-border bg-theme-card/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <span className="text-xs font-semibold uppercase tracking-widest text-theme-accent">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What our clients say.
          </h2>
          <p className="mt-3 text-theme-muted">
            Real feedback from real people we've had the pleasure to work with.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-theme-border bg-theme-card p-4 sm:p-6"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <p className="flex-1 text-sm leading-relaxed text-theme-muted italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-theme-border pt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-theme-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
