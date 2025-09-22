import { useEffect, useRef } from 'react'
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"

function ScrollSmootherWrapper({ children }) {
  const smoother = useRef(null)

  useEffect(() => {
    // Registrar el plugin
    gsap.registerPlugin(ScrollSmoother)

    // Crear el ScrollSmoother después de que el DOM esté listo
    const timer = setTimeout(() => {
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content", 
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: true,
        ignoreMobileResize: true
      })
    }, 100)

    // Cleanup al desmontar
    return () => {
      clearTimeout(timer)
      if (smoother.current) {
        smoother.current.kill()
      }
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}

export default ScrollSmootherWrapper