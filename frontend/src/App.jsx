
import Footer from './Footer/index.jsx'
import Navbar from './Navbar/index.jsx'
import About from './Portfolio/About/index.jsx'
import Certificates from './Portfolio/Certificate/index.jsx'
import Contact from './Portfolio/Contact/index.jsx'
import Education from './Portfolio/Education/index.jsx'
import Experience from './Portfolio/Experience/index.jsx'
import Index from './Portfolio/Index/index.jsx'
import Projects from './Portfolio/Project/index.jsx'
import Resume from './Portfolio/Resume/index.jsx'
import Skills from './Portfolio/Skills/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/MyPortfolio"            element={<Index />} />
        {/* <Route path="/about"       element={<About />} /> */}
        <Route path="/skills"      element={<Skills />} />
        <Route path="/projects"    element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/education"   element={<Education />} />
        <Route path="/experience"  element={<Experience />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/resume"      element={<Resume />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
