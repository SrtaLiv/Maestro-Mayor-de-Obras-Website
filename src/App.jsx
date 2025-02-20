import { useState } from 'react'
import './index.css'
import NavBar from './navbar/NavBar'
import Home from './home/Home'
// import { Button } from "@/components/ui/button"
import Services from './services/Services'
import { FAQ } from './services/AskQuestions'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Home />
      <Services/>
    </>
  )
}

export default App
