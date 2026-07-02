import Section from './Section'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Contact({ profile }) {
  return (
    <Section id="contact" index="05" title="Get In Touch">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-lg leading-relaxed text-slate-600">
          {profile.availability}. Whether you have a role in mind, a question, or just
          want to connect — my inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
        >
          <MailIcon /> Say hello
        </a>

        <div className="mt-10 flex items-center justify-center gap-6 text-slate-400">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent">
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent">
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-accent">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Section>
  )
}
