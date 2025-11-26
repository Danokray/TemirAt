import HeroSection from '../components/HeroSection.jsx'
import WhyChooseSection from '../components/WhyChooseSection.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import CallToActionSection from '../components/CallToActionSection.jsx'

const Home = () => {
  return (
    <div className="w-full bg-brand-dark text-white">
      <HeroSection />
      <WhyChooseSection />
      <ProjectsSection />
      <CallToActionSection />
    </div>
  )
}

export default Home

