import Section from './Section'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Contact({ profile }) {
  return (
    <Section id="contact" label="Contact" title="Get In Touch">
      <div className="reveal bp-panel bp-shadow-lg mx-auto max-w-2xl p-8 text-center">
        <p className="text-[15px] leading-relaxed" style={{ color: 'var(--bp-ink-soft)' }}>
          {profile.availability}. Whether you have a role in mind, a question, or just want to
          connect — my inbox is always open.
        </p>

        <a href={`mailto:${profile.email}`} className="bp-btn bp-btn-primary bp-focus mt-6">
          <MailIcon /> Say hello
        </a>

        <p className="mt-5 font-mono text-xs" style={{ color: 'var(--bp-ink-muted)' }}>
          {profile.email}
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
