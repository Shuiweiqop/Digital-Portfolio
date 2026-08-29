export default function Footer({ profile }) {
  return (
    <footer style={{ borderTop: '3px solid var(--bp-ink)' }}>
      <div
        className="mx-auto max-w-5xl px-6 py-6 text-center font-mono text-xs"
        style={{ color: 'var(--bp-ink-muted)' }}
      >
        <p>Designed &amp; built by {profile.name} · React · Tailwind · Vite</p>
        <p className="mt-1">{profile.location}</p>
      </div>
    </footer>
  )
}
