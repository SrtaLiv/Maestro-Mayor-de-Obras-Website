import { useState } from 'react'
import './index.css'
import NavBar from './navbar/NavBar'
import Home from './home/Home'
import { Button } from "@/components/ui/button"
import Services from './services/Services'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Home />
      <Services/>
      <Button>Click me</Button>
    </>
  )
}

export default App
