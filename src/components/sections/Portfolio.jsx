import { useState } from 'react'
import { portfolio, categories } from '@/data/portfolio'
import { cn } from '@/utils/cn'
import { Modal } from '@/components/ui/Modal'

export function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? portfolio : portfolio.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
        <span className="text-xs font-semibold uppercase tracking-widest text-theme-accent">
          Our Work
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Projects we're proud of.
        </h2>
        <p className="mt-3 text-theme-muted">
          A selection of recent projects showcasing our expertise across web, branding, and apps.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2" data-aos="fade-up" data-aos-delay="100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
              active === cat
                ? 'bg-theme-accent text-white'
                : 'text-theme-muted hover:text-theme-text hover:bg-theme-card',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setSelected(item)}
            className="group relative overflow-hidden rounded-xl border border-theme-border bg-theme-card text-left cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-4">
              <span className="text-xs font-medium text-theme-accent">{item.category}</span>
              <h3 className="mt-1 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-theme-muted">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[55vh] rounded-t-xl object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-theme-accent">
                {selected.category}
              </span>
              <h3 className="mt-1 text-2xl font-bold">{selected.title}</h3>
              <p className="mt-3 leading-relaxed text-theme-muted">{selected.description}</p>
              <p className="mt-4 text-sm text-theme-muted">
                Interested in this project? <a href="#contact" onClick={() => setSelected(null)} className="text-theme-accent underline transition-colors hover:brightness-110">Let's talk</a> about how we can build something similar for you.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
