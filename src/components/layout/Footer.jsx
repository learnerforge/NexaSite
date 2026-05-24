import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
]

const footerLinks = [
  {
    title: 'Services',
    links: ['Web Dev', 'Design', 'Marketing', 'Analytics'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-theme-border bg-theme-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-bold tracking-tight">
              Nexa<span className="text-theme-accent">Site</span>
            </h3>
            <p className="text-sm leading-relaxed text-theme-muted">
              Modern digital solutions for businesses, freelancers, and creators looking to make an impact online.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-theme-muted">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#services"
                      className="text-sm text-theme-muted transition-colors hover:text-theme-text"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-theme-border pt-6 sm:flex-row">
          <p className="text-xs text-theme-muted">
            &copy; {new Date().getFullYear()} NexaSite. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-lg p-2 text-theme-muted transition-colors hover:text-theme-text hover:bg-theme-bg"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
