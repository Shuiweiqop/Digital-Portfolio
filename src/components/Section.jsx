// Shared section wrapper. The cyan label and heavy rule are the Blueprint
// signature repeated at every section head. `label` is a short word describing
// the section's content — the old 01/02/03 numbering implied a sequence these
// sections don't actually have.
export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="reveal mb-8">
        <div className="flex flex-wrap items-baseline gap-3">
          {label != null && <span className="bp-tag">{label}</span>}
          <h2
            className="text-[clamp(22px,3.4vw,32px)] font-extrabold uppercase leading-none tracking-[-0.03em]"
            style={{ color: 'var(--bp-ink)' }}
          >
            {title}
          </h2>
        </div>
        <div className="mt-3 h-[3px]" style={{ backgroundColor: 'var(--bp-ink)' }} />
      </div>
      {children}
    </section>
  )
}
