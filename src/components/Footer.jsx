import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Robokolik', path: '/robokolik' },
  { label: 'Robotaxi', path: '/robotaxi' },
  { label: 'Contact', path: '/contact' },
]

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative px-6 pb-12 pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-white/5 bg-white/5 px-6 py-8 text-white shadow-[0_25px_80px_rgba(5,8,20,0.65)] backdrop-blur-xl transition-all duration-700 md:flex-row md:items-center md:justify-between ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="text-sm text-white/70">
          © 2025 TemirAt Robotics. All rights reserved.
        </p>

        <div className="flex flex-1 flex-col gap-5 md:items-end">
          <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            {footerLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition hover:text-white ${
                    isActive ? 'text-brand-secondary' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-white/70 transition hover:border-brand-secondary hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-white/70 transition hover:border-brand-secondary hover:text-white"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer





