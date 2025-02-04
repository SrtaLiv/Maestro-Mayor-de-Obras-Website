import { useState } from 'react'
import './App.css'
import Home from './home/Home'
import Services from './services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Services />
    </>
  )
}

export default App
