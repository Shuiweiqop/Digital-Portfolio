import Section from './Section'

export default function Experience({ experience }) {
  return (
    <Section id="experience" label="Career" title="Where I've Worked">
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={job.company} className="reveal bp-panel bp-shadow p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3
                className="text-[17px] font-extrabold uppercase leading-tight tracking-[-0.02em]"
                style={{ color: 'var(--bp-ink)' }}
              >
                {job.role}
              </h3>
              <span className="font-mono text-xs" style={{ color: 'var(--bp-ink-muted)' }}>
                {job.period}
              </span>
            </div>

            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--bp-accent)' }}>
              {job.company}
            </p>

            <div className="mt-3 h-[3px] w-12" style={{ backgroundColor: 'var(--bp-accent)' }} />

            <ul className="mt-4 space-y-2 text-sm" style={{ color: 'var(--bp-ink-soft)' }}>
              {job.points.map((pt, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true" className="mt-0.5" style={{ color: 'var(--bp-accent)' }}>
                    ▸
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
