import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import ContactForm from './ContactForm'
import { GitHubIcon, LinkedInIcon, MailIcon, CheckIcon } from './Icons'

export default function Contact({ profile }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  // A mailto: link silently does nothing when no mail client is registered,
  // which is common for people who use webmail. Copying the address always
  // works, and the button reports what happened.
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // Clipboard API needs a secure context; fall back to a temporary node.
      const el = document.createElement('textarea')
      el.value = profile.email
      el.setAttribute('readonly', '')
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Section id="contact" label="Contact" title="Get In Touch">
      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
        <div className="reveal">
          <ContactForm profile={profile} />
        </div>

        <aside className="reveal bp-panel bp-shadow flex flex-col p-6">
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--bp-ink-soft)' }}>
            {profile.availability}. Whether you have a role in mind, a question, or just want to
            connect — my inbox is always open.
          </p>

          <h3
            className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.16em]"
            style={{ color: 'var(--bp-accent)' }}
          >
            Direct
          </h3>

          <button
            type="button"
            onClick={copyEmail}
            className="bp-focus mt-2.5 flex items-center gap-2 text-left font-mono text-[13px] transition-colors hover:text-accent"
            style={{ color: 'var(--bp-ink)' }}
          >
            {copied ? <CheckIcon className="h-4 w-4" /> : <MailIcon className="h-4 w-4" />}
            {copied ? 'Copied to clipboard' : profile.email}
          </button>

          <p className="mt-1.5 font-mono text-[11px]" style={{ color: 'var(--bp-ink-muted)' }}>
            {profile.location}
          </p>

          <h3
            className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.16em]"
            style={{ color: 'var(--bp-accent)' }}
          >
            Elsewhere
          </h3>

          <div className="mt-3 flex items-center gap-5" style={{ color: 'var(--bp-ink-muted)' }}>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="bp-focus transition hover:text-accent"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="bp-focus transition hover:text-accent"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="bp-focus transition hover:text-accent"
            >
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </aside>
      </div>
    </Section>
  )
}
