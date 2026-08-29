import Section from './Section'

export default function Skills({ skills }) {
  return (
    <Section id="skills" label="Stack" title="Technical Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="reveal bp-panel bp-shadow p-4">
            <h3
              className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{ color: 'var(--bp-accent)' }}
            >
              {s.group}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="border px-2 py-0.5 font-mono text-[11px] font-medium"
                  style={{ borderColor: 'var(--bp-ink)', color: 'var(--bp-ink-soft)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
