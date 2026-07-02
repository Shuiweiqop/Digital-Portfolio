// Shared section wrapper with a numbered heading (clean, consistent layout).
export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <h2 className="reveal mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900">
        {index != null && (
          <span className="font-mono text-lg font-medium text-accent">{index}.</span>
        )}
        {title}
        <span className="ml-2 h-px flex-1 bg-slate-200" />
      </h2>
      {children}
    </section>
  )
}
