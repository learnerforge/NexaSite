import { useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import { cn } from '@/utils/cn'

export function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-green-600/30 bg-green-900/90 px-5 py-3 text-sm text-green-100 shadow-lg backdrop-blur-sm transition-all duration-300',
        show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none',
      )}
    >
      <CheckCircle size={18} />
      {message}
    </div>
  )
}
