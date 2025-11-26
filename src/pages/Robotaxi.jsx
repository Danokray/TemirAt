import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Robotaxi = () => {
  const [heroVisible, setHeroVisible] = useState(false)
  const [featuresVisible, setFeaturesVisible] = useState(false)
  const [techVisible, setTechVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  
  const featuresRef = useRef(null)
  const techRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    setHeroVisible(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === featuresRef.current) setFeaturesVisible(true)
            if (entry.target === techRef.current) setTechVisible(true)
            if (entry.target === ctaRef.current) setCtaVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (featuresRef.current) observer.observe(featuresRef.current)
    if (techRef.current) observer.observe(techRef.current)
    if (ctaRef.current) observer.observe(ctaRef.current)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: '🛡️',
      title: 'Ultra Safe',
      description: 'Advanced sensors and AI ensure maximum safety with 360° awareness and instant reaction times.',
    },
    {
      icon: '⚡',
      title: 'Fast & Efficient',
      description: 'Optimized routes and smooth autonomous driving get you to your destination quickly.',
    },
    {
      icon: '🌱',
      title: 'Eco-Friendly',
      description: '100% electric vehicles reducing carbon emissions and promoting sustainable transportation.',
    },
    {
      icon: '🕐',
      title: '24/7 Available',
      description: 'Round-the-clock service ensuring reliable transportation whenever you need it.',
    },
  ]

  const techFeatures = [
    {
      title: 'Autonomous Navigation',
      description: 'Our vehicles use state-of-the-art LIDAR, radar, and computer vision systems to navigate complex urban environments with precision and safety. Real-time processing of millions of data points per second ensures smooth, safe operation.',
      color: 'text-brand-secondary',
    },
    {
      title: 'Safety First',
      description: 'Multiple redundant systems ensure fail-safe operation. From backup power systems to emergency braking, every aspect is designed with passenger safety as the top priority.',
      color: 'text-brand-accent',
    },
    {
      title: 'AI Decision Making',
      description: 'Advanced machine learning algorithms trained on millions of miles of driving data enable our vehicles to make intelligent decisions in real-time, adapting to changing road conditions and traffic patterns.',
      color: 'text-purple-400',
    },
    {
      title: 'Smart City Integration',
      description: 'Connected to city infrastructure for optimal traffic flow management. Our vehicles communicate with traffic lights, other vehicles, and smart city systems for maximum efficiency.',
      color: 'text-brand-secondary',
    },
  ]

  const stats = [
    { value: '100K+', label: 'Miles Driven' },
    { value: '99.9%', label: 'Safety Rating' },
    { value: '50%', label: 'Cost Savings' },
    { value: '0', label: 'Carbon Emissions', icon: '🚫' },
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 pb-24 bg-[#1A1A2E]">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.25),_transparent_60%)]" />
        <div className="absolute inset-0 blur-[120px] bg-gradient-to-br from-blue-500/15 via-transparent to-purple-600/15" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-purple-500/10 via-transparent to-transparent blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center gap-12 lg:gap-20">
          {/* Left side: Content */}
          <div
            className={`flex flex-col max-w-xl transition-all duration-700 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="mb-6 inline-flex w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
              Autonomous Transportation
            </div>
            
            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Robotaxi
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
              The future of urban transportation is here. Experience safe, efficient, and eco-friendly autonomous rides that redefine how we move through cities.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-500/30 transition hover:scale-105"
              >
                Book a Ride
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="#features"
                className="rounded-full border border-white/20 bg-[#1A1A2E]/80 px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:border-white/50 hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right side: Car image placeholder */}
          <div
            className={`hidden flex-1 items-center justify-center transition-all duration-700 delay-150 lg:flex ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/25 to-purple-600/20 blur-3xl" />
              
              {/* Placeholder for car image */}
              <div className="relative z-10 flex h-96 w-96 items-center justify-center rounded-3xl border border-white/10 bg-[#1A1A2E]/50 backdrop-blur">
                <div className="text-center text-white/50">
                  <div className="mb-4 text-6xl">🚗</div>
                  <p className="text-sm">Robotaxi Vehicle</p>
                  <p className="text-xs text-white/40">Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Robotaxi Section */}
      <section
        id="features"
        ref={featuresRef}
        className="relative px-6 py-24 bg-[#1A1A2E]"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1A1A2E] via-[#16213E] to-[#1A1A2E]" />
        
        <div
          className={`mx-auto max-w-6xl transition-all duration-700 ${
            featuresVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Robotaxi
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Advanced autonomous technology delivering unparalleled safety, efficiency, and convenience
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[24px] border border-white/10 bg-[#16213E]/50 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur transition hover:border-blue-500/30 hover:shadow-[0_30px_100px_rgba(59,130,246,0.2)]"
              >
                <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-white/70">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section
        ref={techRef}
        className="relative px-6 py-24 bg-[#1A1A2E]"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#16213E] via-[#1A1A2E] to-[#0F1419]" />
        
        <div
          className={`mx-auto max-w-6xl transition-all duration-700 ${
            techVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Advanced{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {techFeatures.map((tech) => (
              <article
                key={tech.title}
                className="rounded-[24px] border border-white/10 bg-[#16213E]/50 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur transition hover:border-blue-500/30"
              >
                <h3 className={`text-2xl font-semibold ${tech.color === 'text-brand-secondary' ? 'text-blue-400' : tech.color === 'text-brand-accent' ? 'text-orange-400' : tech.color === 'text-purple-400' ? 'text-purple-400' : 'text-blue-400'}`}>{tech.title}</h3>
                <p className="mt-4 text-white/70">{tech.description}</p>
              </article>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2">
                  {stat.icon && <span className="text-2xl">{stat.icon}</span>}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                    {stat.value}
                  </span>
                </div>
                <span className="mt-2 block text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        ref={ctaRef}
        className="relative px-6 pb-24 bg-[#1A1A2E]"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#16213E] via-[#1A1A2E] to-[#0F1419]" />

        <div
          className={`mx-auto max-w-5xl rounded-[32px] border border-white/5 bg-[#16213E]/50 p-12 text-center text-white shadow-[0_50px_150px_rgba(0,0,0,0.6)] backdrop-blur transition-all duration-700 ${
            ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Experience the{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Future
            </span>{' '}
            Today
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Join the autonomous transportation revolution. Book your first Robotaxi ride and discover a new way to move through the city.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-500/30 transition hover:scale-105"
            >
              Book Your Ride
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 bg-[#1A1A2E]/80 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 backdrop-blur transition hover:border-white hover:bg-white/10 hover:text-white"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Robotaxi
