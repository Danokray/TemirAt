import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    icon: '🧠',
    title: 'Advanced Technology',
    description:
      'Latest AI perception, machine learning, and robotics engineering stack powering every deployment.',
  },
  {
    icon: '⚡',
    title: 'Fast Innovation',
    description:
      'Rapid prototyping and development cycles bring proofs of concept to field-ready platforms quickly.',
  },
  {
    icon: '🎯',
    title: 'Precision Engineering',
    description:
      'Quality-first manufacturing and rigorous QA deliver safe, reliable, high-performance systems.',
  },
]

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.25 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="relative px-6 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050b18] via-[#050b18] to-[#040713]" />
      <div
        className={`mx-auto max-w-6xl rounded-[32px] border border-white/5 bg-white/5 p-10 text-center shadow-[0_45px_140px_rgba(4,7,19,0.9)] backdrop-blur transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-brand-secondary">
          Why Choose Us
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-white">
          Leading the robotics revolution with cutting-edge solutions
        </h2>
        <p className="mt-4 text-white/75">
          TemirAt Robotics guides partners from concept to deployment, delivering intelligent
          machines that thrive in real-world conditions.
        </p>

        <div className="mt-12 grid gap-6 text-left text-white md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0b1427] to-[#071122] p-6 shadow-[0_30px_100px_rgba(3,5,15,0.9)]"
            >
              <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-secondary to-purple-500 text-3xl">
                {card.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm text-white/70">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection





