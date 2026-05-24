import { useState } from 'react'
import { Menu, X, Sun, Moon, Palette } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { navLinks } from '@/data/navigation'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/utils/cn'

const themeIcons = { dark: Moon, blue: Sun, dust: Palette }
const sectionIds = navLinks.map((l) => l.href.slice(1))

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, cycleTheme } = useTheme()
  const ThemeIcon = themeIcons[theme]
  const activeId = useScrollSpy(sectionIds)

  const handleClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-theme-border bg-theme-nav backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleClick('#hero') }} className="font-heading text-xl font-bold tracking-tight">
          Nexa<span className="text-theme-accent">Site</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'text-theme-accent font-semibold'
                    : 'text-theme-muted hover:text-theme-text hover:bg-theme-card',
                )}
              >
                {link.label}
              </a>
            )
          })}
          <button
            onClick={cycleTheme}
            className="ml-2 rounded-lg p-2 text-theme-muted transition-colors hover:text-theme-text hover:bg-theme-card"
            aria-label={`Theme: ${theme}`}
          >
            <ThemeIcon size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={cycleTheme}
            className="rounded-lg p-2 text-theme-muted transition-colors hover:text-theme-text"
            aria-label={`Theme: ${theme}`}
          >
            <ThemeIcon size={18} />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-theme-text"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-t border-theme-border transition-all duration-300 md:hidden',
          open ? 'max-h-80' : 'max-h-0',
        )}
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'text-theme-accent font-semibold'
                    : 'text-theme-muted hover:text-theme-text hover:bg-theme-card',
                )}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}
