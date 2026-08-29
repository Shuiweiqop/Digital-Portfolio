// Full-width band directly under the hero. Networking certifications are a
// real differentiator for this profile, so they sit above the fold-adjacent
// content rather than buried in the About sidebar.
export default function Certifications({ certifications }) {
  return (
    <section
      aria-label="Certifications"
      style={{
        borderTop: '3px solid var(--bp-ink)',
        borderBottom: '3px solid var(--bp-ink)',
        backgroundColor: 'var(--bp-raised)',
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-7">
        <div className="reveal flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
          <h2
            className="shrink-0 font-mono text-[11px] font-bold uppercase leading-relaxed tracking-[0.16em] md:w-28"
            style={{ color: 'var(--bp-accent)' }}
          >
            Certified
          </h2>

          <ul className="grid flex-1 gap-5 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 h-[3px] w-6 shrink-0"
                  style={{ backgroundColor: 'var(--bp-accent)' }}
                />
                <div>
                  <p
                    className="text-[15px] font-extrabold uppercase leading-none tracking-[-0.01em]"
                    style={{ color: 'var(--bp-ink)' }}
                  >
                    {cert.issuer} {cert.name}
                    {cert.modules.length > 1 && (
                      <span
                        className="ml-2 font-mono text-[11px] font-medium normal-case tracking-normal"
                        style={{ color: 'var(--bp-ink-muted)' }}
                      >
                        ×{cert.modules.length}
                      </span>
                    )}
                  </p>
                  <p
                    className="mt-1.5 text-[13px] leading-relaxed"
                    style={{ color: 'var(--bp-ink-soft)' }}
                  >
                    {cert.modules.join(' · ')}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
