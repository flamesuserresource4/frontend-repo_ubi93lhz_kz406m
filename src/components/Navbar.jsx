import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-white/90 font-extrabold text-xl tracking-tight">GameBook</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#cafes" className="hover:text-white transition">Cafes</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="/admin" className="hover:text-white transition">Admin</a>
          <a href="/owner" className="hover:text-white transition">Owner</a>
        </nav>
        <button className="md:hidden text-white/90" aria-label="menu">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}
