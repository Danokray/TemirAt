import { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-dark via-brand-dark/80 to-brand-primary/10" />

      <div
        className={`mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border border-white/5 bg-white/5 p-8 shadow-[0_40px_120px_rgba(4,7,19,0.9)] backdrop-blur-xl lg:flex-row ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        } transition-all duration-700`}
      >
        <div className="flex-1 space-y-6 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary">
            Contact
          </p>
          <h2 className="font-display text-3xl font-semibold">
            Get in touch
          </h2>
          <p className="text-white/75">
            Collaborate on autonomous deployments, request a custom demo, or
            access our research tooling. Our engineers respond within 2
            business days.
          </p>

          <div className="space-y-3 text-sm text-white/80">
            <div>
              <p className="text-white">Email</p>
              <a
                href="mailto:contact@temirat.ai"
                className="text-brand-secondary transition hover:text-brand-primary"
              >
                contact@temirat.ai
              </a>
            </div>
            <div>
              <p className="text-white">Phone</p>
              <a
                href="tel:+1234567890"
                className="text-brand-secondary transition hover:text-brand-primary"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex gap-4 pt-2 text-white">
              <a
                href="https://www.linkedin.com"
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-white/70 transition hover:border-brand-secondary hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://www.x.com"
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-white/70 transition hover:border-brand-secondary hover:text-white"
              >
                X
              </a>
            </div>
          </div>
        </div>

        <form className="flex-1 space-y-4 text-white/80">
          <div>
            <label htmlFor="name" className="text-sm uppercase tracking-wide">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-brand-secondary"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm uppercase tracking-wide">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-brand-secondary"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-sm uppercase tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your robotics initiative..."
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-brand-secondary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:scale-105"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact





