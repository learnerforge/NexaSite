import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

const Input = forwardRef(({ label, error, className, ...props }, ref) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-theme-text">{label}</label>
      )}
      <input
        ref={ref}
        className={cn(
          'w-full rounded-lg border border-theme-border bg-theme-card px-4 py-2.5 text-sm text-theme-text placeholder:text-theme-muted transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent/50',
          error && 'border-red-500 focus:ring-red-500/50',
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
})

Input.displayName = 'Input'
export { Input }
