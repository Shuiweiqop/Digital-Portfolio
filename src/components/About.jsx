import Section from './Section'

export default function About({ about, education }) {
  return (
    <Section id="about" label="Profile" title="About Me">
      <div className="grid gap-8 md:grid-cols-3">
        <div
          className="reveal space-y-4 text-[14.5px] leading-relaxed md:col-span-2"
          style={{ color: 'var(--bp-ink-soft)' }}
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="reveal bp-panel bp-shadow p-5">
          <h3
            className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]"
            style={{ color: 'var(--bp-accent)' }}
          >
            Education
          </h3>
          <p className="mt-2.5 font-bold" style={{ color: 'var(--bp-ink)' }}>
            {education.degree}
          </p>
          <p className="text-sm" style={{ color: 'var(--bp-ink-soft)' }}>
            {education.school}
          </p>
          <p className="mt-1 font-mono text-xs" style={{ color: 'var(--bp-ink-muted)' }}>
            {education.period}
          </p>
          <p className="mt-1 font-mono text-xs" style={{ color: 'var(--bp-ink-muted)' }}>
            {education.detail}
          </p>

          <h3
            className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.16em]"
            style={{ color: 'var(--bp-accent)' }}
          >
            Certifications
          </h3>
          <ul className="mt-2.5 space-y-2 text-sm" style={{ color: 'var(--bp-ink-soft)' }}>
            {education.certs.map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden="true" style={{ color: 'var(--bp-accent)' }}>
                  ▸
                </span>
                {c}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
