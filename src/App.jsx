import './index.css'
import Home from './home/Home'
import Project from './projects/Project'
import Footer from './footer/Footer'
import { FAQ } from './services/AskQuestions'
import Services from './services/Services'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaWhatsapp } from 'react-icons/fa'
import Quote from './quote/Quote'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useGSAP(() => {
    const sectionsToPin = [".home-panel", ".quote-panel"]; // solo Home y Quote

    sectionsToPin.forEach((selector) => {
      gsap.utils.toArray(selector).forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false, // dejar espacio para la siguiente sección
        });
      });
    });
  }, []);


  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=542284582635"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl transition-all duration-300"
      >
        <FaWhatsapp size={28} />
      </a>

      <div className="home-panel">
        <Home />
      </div>

      <div className="quote-panel">
        <Quote />
      </div>
      <div style={{ minHeight: '100vh' }}></div>
      <Services />
      <Project />

      <div className="home-panel">
        <FAQ />
      </div>
      <div className="quote-panel">
        <Footer />
      </div>

    </>
  )
}

export default App
