import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Sections from './pages/Sections'
import Nursery from './pages/Nursery'
import Primary from './pages/Primary'
import Secondary from './pages/Secondary'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/sections"   element={<Sections />} />
        <Route path="/nursery"    element={<Nursery />} />
        <Route path="/primary"    element={<Primary />} />
        <Route path="/secondary"  element={<Secondary />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
