import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Robokolik', path: '/robokolik' },
  { label: 'Robotaxi', path: '/robotaxi' },
  { label: 'Contact', path: '/contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClassName = ({ isActive }) =>
    `group relative px-1 text-sm font-semibold tracking-wide transition after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-brand-secondary after:to-brand-primary after:transition after:content-[''] ${
      isActive
        ? 'text-brand-secondary after:opacity-100'
        : 'text-white/70 hover:text-white after:opacity-0 group-hover:after:opacity-40'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-gradient-to-r from-[#0d1c2f]/90 via-[#101f36]/90 to-[#0d1624]/90 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl shadow-2xl shadow-brand-primary/10' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="select-none text-lg font-semibold tracking-tight text-white transition hover:text-brand-secondary"
        >
          <span className="bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">
            TemirAt.kz
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClassName}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
          >
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="relative flex size-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/30 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 transform rounded-full bg-white transition ${
              isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-white transition ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 transform rounded-full bg-white transition ${
              isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`origin-top bg-brand-dark/95 px-6 pb-6 pt-2 text-sm text-white/90 shadow-2xl shadow-black/40 transition-all lg:hidden ${
          isMenuOpen
            ? 'scale-y-100 opacity-100'
            : 'pointer-events-none scale-y-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-semibold transition hover:bg-white/5 ${
                  isActive ? 'text-brand-secondary' : 'text-white'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-primary px-4 py-3 text-center text-base font-semibold text-white shadow-glow"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header




