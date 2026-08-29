import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: scrolled ? 'var(--bp-paper)' : 'transparent',
        borderBottom: scrolled ? '3px solid var(--bp-ink)' : '3px solid transparent',
      }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="bp-focus font-mono text-sm font-bold uppercase tracking-[0.08em]"
          style={{ color: 'var(--bp-ink)' }}
        >
          {name.split(' ').slice(-2).join(' ')}
          <span style={{ color: 'var(--bp-accent)' }}>.py</span>
        </a>

        <ul
          className="hidden items-center gap-7 text-[13px] font-bold uppercase tracking-[0.05em] md:flex"
          style={{ color: 'var(--bp-ink-soft)' }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="bp-focus transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="bp-focus md:hidden"
          style={{ color: 'var(--bp-ink)' }}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          className="flex flex-col px-6 py-2 text-[13px] font-bold uppercase tracking-[0.05em] md:hidden"
          style={{
            backgroundColor: 'var(--bp-paper)',
            borderTop: '3px solid var(--bp-ink)',
            color: 'var(--bp-ink-soft)',
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="bp-focus block py-2 transition-colors hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
