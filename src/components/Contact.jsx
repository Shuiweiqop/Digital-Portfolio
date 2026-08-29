import { useEffect, useRef, useState } from 'react'
import Section from './Section'
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
      <div className="reveal bp-panel bp-shadow-lg mx-auto max-w-2xl p-8 text-center">
        <p className="text-[15px] leading-relaxed" style={{ color: 'var(--bp-ink-soft)' }}>
          {profile.availability}. Whether you have a role in mind, a question, or just want to
          connect — my inbox is always open.
        </p>

        <button
          type="button"
          onClick={copyEmail}
          className="bp-btn bp-btn-primary bp-focus mt-6"
        >
          {copied ? (
            <>
              <CheckIcon /> Copied!
            </>
          ) : (
            <>
              <MailIcon /> Say hello
            </>
          )}
        </button>

        <p aria-live="polite" className="mt-5 font-mono text-xs" style={{ color: 'var(--bp-ink-muted)' }}>
          {copied ? 'Email copied to clipboard' : profile.email}
        </p>

        <div
          className="mt-6 flex items-center justify-center gap-6"
          style={{ color: 'var(--bp-ink-muted)' }}
        >
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
      </div>
    </Section>
  )
}
