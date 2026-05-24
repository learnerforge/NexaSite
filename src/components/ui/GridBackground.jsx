import { cn } from '@/utils/cn'

export function GridBackground({ className }) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(var(--theme-accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--theme-accent) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-drift 20s linear infinite',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, var(--theme-accent) 1px, transparent 0)
          `,
          backgroundSize: '30px 30px',
          animation: 'grid-drift 30s linear infinite reverse',
        }}
      />
      <style>{`
        @keyframes grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </div>
  )
}
