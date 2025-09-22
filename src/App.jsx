import './index.css'
import Home from './home/Home'
import Project from './projects/Project'
import Footer from './footer/Footer'
import { FAQ } from './services/AskQuestions'
import Services from './services/Services'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
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
