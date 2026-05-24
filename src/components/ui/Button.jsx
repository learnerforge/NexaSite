import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

const variants = {
  primary: 'bg-theme-accent text-white hover:brightness-110 shadow-sm',
  outline: 'border border-theme-border text-theme-text hover:bg-theme-card',
  ghost: 'text-theme-text hover:bg-theme-card',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3 text-lg',
}

const Button = forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-theme-accent/50 cursor-pointer',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
})

Button.displayName = 'Button'
export { Button }
