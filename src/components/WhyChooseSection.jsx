import { useEffect, useRef, useState } from 'react'

const CpuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <rect width="16" height="16" x="4" y="4" rx="2"></rect>
    <rect width="6" height="6" x="9" y="9" rx="1"></rect>
    <path d="M15 2v2"></path>
    <path d="M15 20v2"></path>
    <path d="M2 15h2"></path>
    <path d="M2 9h2"></path>
    <path d="M20 15h2"></path>
    <path d="M20 9h2"></path>
    <path d="M9 2v2"></path>
    <path d="M9 20v2"></path>
  </svg>
)

const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
  </svg>
)

const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
)

const cards = [
  {
    icon: <CpuIcon />,
    title: 'Advanced Technology',
    description:
      'Utilizing the latest in AI, machine learning, and robotics engineering to create intelligent solutions.',
  },
  {
    icon: <ZapIcon />,
    title: 'Fast Innovation',
    description:
      'Rapid prototyping and development cycles to bring ideas to life quickly and efficiently.',
  },
  {
    icon: <TargetIcon />,
    title: 'Precision Engineering',
    description:
      'Meticulous attention to detail ensuring reliable and high-performance robotic systems.',
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
      className="relative px-6 py-24 bg-[rgba(15,27,44,0.8)]"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050b18] via-[#050b18] to-[#040713]" />
      <div
        className={`mx-auto max-w-6xl rounded-[32px] border border-white/5 bg-white/5 p-10 text-center shadow-[0_45px_140px_rgba(4,7,19,0.9)] backdrop-blur transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
          Why Choose{' '}
          <span className="bg-gradient-to-r from-brand-secondary to-purple-500 bg-clip-text text-transparent">
            Us
          </span>
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Leading the robotics revolution with cutting-edge technology and innovative solutions
        </p>

        <div className="mt-12 grid gap-6 text-left text-white md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0b1427] to-[#071122] p-6 shadow-[0_30px_100px_rgba(3,5,15,0.9)]"
            >
              <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-secondary to-purple-500">
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





