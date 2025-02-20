import { useState } from 'react'
import './index.css'
import NavBar from './navbar/NavBar'
import Home from './home/Home'
// import { Button } from "@/components/ui/button"
import Services from './services/Services'
import Project from './projects/Project'

import { FAQ } from './services/AskQuestions'
// import { CarouselPlugin } from './projects/Carousel'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Home />
      <Services/>
      <Project/>
      {/* <CarouselPlugin/> */}
    </>
  )
}

export default App
