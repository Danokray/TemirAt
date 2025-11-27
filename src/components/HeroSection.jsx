import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/home/robot-hero.jpg'

const stats = [
  { value: '2+', label: 'Active Projects', color: 'text-brand-secondary' },
  { value: '100%', label: 'Innovation', color: 'text-purple-400' },
  { value: '24/7', label: 'Development', color: 'text-orange-400' },
]

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 pb-24"
    >
      {/* Background gradients and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.4),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.35),_transparent_60%)]" />
      <div className="absolute inset-0 blur-[120px] bg-gradient-to-br from-brand-secondary/20 via-transparent to-purple-500/20" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-pink-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center gap-12 lg:gap-20">
        {/* Left side: Content */}
        <div
          className={`flex flex-1 flex-col transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-brand-secondary via-brand-primary to-purple-500 bg-clip-text text-transparent">
              Innovating
            </span>{' '}
            <span className="text-white">The Future</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            TemirAt Robotics pioneers cutting-edge autonomous systems that
            transform industries through intelligent automation and innovative
            technology solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/robokolik"
              className="rounded-full bg-gradient-to-r from-brand-secondary via-brand-primary to-purple-500 px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:scale-105"
            >
              Explore Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:border-white/50 hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          {/* Statistics at bottom left */}
          <div className="mt-16 flex flex-wrap gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className={`text-2xl font-bold sm:text-3xl ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Robot image */}
        <div
          className={`hidden flex-1 items-center justify-center transition-all duration-700 delay-150 lg:flex ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-brand-secondary/20 blur-3xl" />

            {/* Robot image card (similar style to Robotaxi) */}
            <div className="relative z-10 flex h-[420px] w-[520px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
              <img
                src={heroImg}
                alt="TemirAt Robotics Hero"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection


