export default function Footer({ profile }) {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-400">
        <p>
          Designed &amp; built by {profile.name} · React · Tailwind · Vite
        </p>
        <p className="mt-1">{profile.location}</p>
      </div>
    </footer>
  )
}
