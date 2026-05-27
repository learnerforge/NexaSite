import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '@/utils/cn'

export function Modal({ isOpen, onClose, children, className }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <div
        className={cn(
          'relative max-h-[90vh] max-w-2xl w-full rounded-2xl border border-theme-border bg-theme-card p-1 shadow-2xl',
          'animate-in fade-in zoom-in-95 duration-200',
          className,
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full p-2.5 text-theme-muted transition-colors hover:text-theme-text hover:bg-theme-bg"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
