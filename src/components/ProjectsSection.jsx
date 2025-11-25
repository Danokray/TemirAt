import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import placeholderRobot from '../assets/robots/placeholder.png'

const projects = [
  {
    title: 'Robokolik',
    description:
      'Interactive robotics platform empowering students to learn code, sensors, and autonomy hands-on.',
    path: '/robokolik',
  },
  {
    title: 'Robotaxi',
    description:
      'Autonomous taxi fleet with Level 4 capability, built for dense urban corridors and safe mobility.',
    path: '/robotaxi',
  },
]

const ProjectsSection = () => {
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
      id="features"
      ref={sectionRef}
      className="relative px-6 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050b18] via-[#071128] to-[#050b18]" />

      <div
        className={`mx-auto max-w-5xl text-center transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-brand-secondary">
          Our Projects
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold text-white">
          Discover how we are transforming education and transport
        </h2>
        <p className="mt-4 text-white/70">
          Each initiative combines TemirAt hardware, autonomy software, and partner collaboration to
          shape the next generation of robotics.
        </p>
      </div>

      <div
        className={`mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 text-white shadow-[0_40px_140px_rgba(4,7,19,0.9)] backdrop-blur transition hover:-translate-y-2"
          >
            <div className="relative">
              <img
                src={placeholderRobot}
                alt={project.title}
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="space-y-4 px-8 py-8">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-white/75">{project.description}</p>
              <Link
                to={project.path}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-brand-secondary hover:text-brand-secondary"
              >
                Learn More
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection





