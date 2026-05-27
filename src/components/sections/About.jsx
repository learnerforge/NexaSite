import { useCountUp } from '@/hooks/useCountUp'

const stats = [
  { target: 50, suffix: '+', label: 'Projects Delivered' },
  { target: 30, suffix: '+', label: 'Happy Clients' },
  { target: 6, suffix: '+', label: 'Years Experience' },
  { target: 15, suffix: '+', label: 'Team Members' },
]

function StatCard({ target, suffix, label }) {
  const { count, ref } = useCountUp(target)

  return (
    <div
      ref={ref}
      className="rounded-xl border border-theme-border bg-theme-card p-4 sm:p-6 text-center"
    >
      <div className="text-3xl font-bold text-theme-accent">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-theme-muted">{label}</div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-2">
        <div data-aos="fade-right">
          <span className="text-xs font-semibold uppercase tracking-widest text-theme-accent">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            We craft digital experiences that drive results.
          </h2>
          <p className="mt-4 leading-relaxed text-theme-muted">
            NexaSite was founded with a simple mission: make professional web presence accessible
            to everyone. We combine modern design with cutting-edge technology to deliver websites
            that load fast, look great, and convert visitors into customers.
          </p>
          <p className="mt-3 leading-relaxed text-theme-muted">
            From small businesses to growing startups, we tailor every solution to your unique
            needs — because your brand deserves to shine online.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="100">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
