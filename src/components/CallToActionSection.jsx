import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const CallToActionSection = () => {
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
      id="gallery"
      ref={sectionRef}
      className="relative px-6 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#05102b] via-[#070f23] to-[#041026]" />

      <div
        className={`mx-auto max-w-5xl rounded-[32px] border border-white/5 bg-gradient-to-r from-brand-secondary/20 via-brand-primary/20 to-purple-600/30 p-12 text-center text-white shadow-[0_50px_150px_rgba(4,7,19,0.9)] backdrop-blur transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="font-display text-4xl font-semibold">
          Ready to <span className="text-brand-secondary">Transform</span> the Future?
        </h2>
        <p className="mt-4 text-lg text-white/85">
          Join us to co-create the next generation of robotics solutions. Together we can design
          something extraordinary for Kazakhstan and beyond.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-brand-secondary via-brand-primary to-purple-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:scale-105"
          >
            Get In Touch
          </Link>
          <Link
            to="/robokolik"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white hover:text-white"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection
