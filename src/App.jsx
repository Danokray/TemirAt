import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Robokolik from './pages/Robokolik.jsx'
import Robotaxi from './pages/Robotaxi.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-dark text-white">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/robokolik" element={<Robokolik />} />
            <Route path="/robotaxi" element={<Robotaxi />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
