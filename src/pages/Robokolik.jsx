import { Link } from 'react-router-dom'
import robotImage from '../assets/home/robokolik.jpg'

const Robokolik = () => {
  return (
    <section className="w-full bg-[#0B1120] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Левая часть */}
        <div className="space-y-6">
          {/* Badge */}
          <span className="inline-block bg-[#0F172A] text-[#7BD3FF] px-6 py-2 rounded-full text-sm font-medium">
            Educational Robotics
          </span>

          {/* Title */}
          <h1 className="text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#2AA8FF] to-[#9D4FF9] bg-clip-text text-transparent">
              Robokolik
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-[#A6B3C5] leading-relaxed max-w-xl">
            Inspiring the next generation of engineers through interactive,
            hands-on robotics education. Learn coding, engineering, and
            problem-solving while having fun building robots.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2AA8FF] to-[#9D4FF9] h-12 px-6 rounded-md font-semibold text-white hover:scale-105 transition duration-300"
            >
              Join the Program
              <span>→</span>
            </Link>

            <button
              type="button"
              className="h-12 px-6 rounded-md bg-white/10 text-white font-medium backdrop-blur border border-white/10 hover:bg-white/20 transition"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Правая часть — картинка */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={robotImage}
            alt="Robots"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Нижняя секция */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          What Makes{' '}
          <span className="bg-gradient-to-r from-[#2AA8FF] to-[#9D4FF9] bg-clip-text text-transparent">
            Robokolik
          </span>{' '}
          Special
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-white/10 hover:border-[#2AA8FF] transition">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2AA8FF] to-[#9D4FF9] flex items-center justify-center mb-6">
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
                className="opacity-90 text-white"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Learn by Doing</h3>
            <p className="text-[#A6B3C5] leading-relaxed">
              Hands-on projects that teach real engineering and coding skills
              through practical application.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-white/10 hover:border-[#2AA8FF] transition">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2AA8FF] to-[#9D4FF9] flex items-center justify-center mb-6">
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
                className="opacity-90 text-white"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
            <p className="text-[#A6B3C5] leading-relaxed">
              Work together with peers to solve challenges and build innovative
              robotic solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-white/10 hover:border-[#2AA8FF] transition">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2AA8FF] to-[#9D4FF9] flex items-center justify-center mb-6">
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
                className="opacity-90 text-white"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Programming Skills</h3>
            <p className="text-[#A6B3C5] leading-relaxed">
              Master coding fundamentals with visual programming and text-based
              languages.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-white/10 hover:border-[#2AA8FF] transition">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2AA8FF] to-[#9D4FF9] flex items-center justify-center mb-6">
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
                className="opacity-90 text-white"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Creative Thinking</h3>
            <p className="text-[#A6B3C5] leading-relaxed">
              Develop problem-solving abilities and creative engineering mindset.
            </p>
          </div>
        </div>
      </div>

      {/* Секция Mission */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          Our{' '}
          <span className="bg-gradient-to-r from-[#2AA8FF] to-[#9D4FF9] bg-clip-text text-transparent">
            Mission
          </span>
        </h2>

        <div className="space-y-10">
          {/* Card 1 */}
          <div className="p-10 rounded-2xl bg-[#0F172A] border border-white/10">
            <h3 className="text-2xl font-semibold mb-3 text-[#2AA8FF]">
              Empower Young Minds
            </h3>
            <p className="text-[#A6B3C5] leading-relaxed">
              Robokolik aims to democratize robotics education by making it
              accessible, engaging, and fun for students of all backgrounds. We
              believe that every child should have the opportunity to explore
              STEM fields through interactive learning experiences.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-10 rounded-2xl bg-[#0F172A] border border-white/10">
            <h3 className="text-2xl font-semibold mb-3 text-[#A044FF]">
              Build Future Innovators
            </h3>
            <p className="text-[#A6B3C5] leading-relaxed">
              Through our comprehensive curriculum, students develop critical
              thinking, problem-solving, and teamwork skills. They learn to
              design, build, and program robots while gaining confidence in
              their abilities to create technology solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-10 rounded-2xl bg-[#0F172A] border border-white/10">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF9D2A]">
              Prepare for Tomorrow
            </h3>
            <p className="text-[#A6B3C5] leading-relaxed">
              As technology continues to shape our world, Robokolik prepares
              students for future careers in engineering, computer science, and
              robotics. We equip them with foundational skills that will serve
              them throughout their academic and professional journeys.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mt-28">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Ready to Start Your{' '}
          <span className="bg-gradient-to-r from-[#2AA8FF] to-[#4A6CFF] bg-clip-text text-transparent">
            Robotics
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#4A6CFF] to-[#9D4FF9] bg-clip-text text-transparent">
            Journey?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-[#A6B3C5] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Join thousands of students already learning and creating with
          Robokolik. Transform your curiosity into innovation.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* Enroll Now */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md font-semibold bg-gradient-to-r from-[#2AA8FF] to-[#9D4FF9] hover:scale-105 hover:shadow-lg transition duration-300"
          >
            Enroll Now
            <span>→</span>
          </Link>

          {/* Contact Us */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md font-medium border border-white/20 bg-white/5 text-white hover:bg-white/10 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Robokolik

