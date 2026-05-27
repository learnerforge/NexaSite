import { cn } from '@/utils/cn'

export function Card({ icon: Icon, title, description, className, children }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-theme-border bg-theme-card p-4 sm:p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
        className,
      )}
    >
      {Icon && (
        <div className="mb-4 inline-flex rounded-lg bg-theme-accent/10 p-3 text-theme-accent">
          <Icon size={24} />
        </div>
      )}
      {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
      {description && <p className="text-sm leading-relaxed text-theme-muted">{description}</p>}
      {children}
    </div>
  )
}
