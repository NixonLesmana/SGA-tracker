import Link from 'next/link'

const navLinks = [
  { label: "Best Games", href: "/best-games" },
  { label: "MVP Watch", href: "/mvp-watch" },
  { label: "Compare", href: "/compare" },
  { label: "Playoffs", href: "/playoffs" },
  { label: "Timeline", href: "/timeline" },
]

function Header() {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/70">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        <Link href="/" className="font-bold text-white">
          <span className="text-blue-400">SGA</span> Tracker
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-300 transition hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header