import './index.css'
import Home from './home/Home'
import Project from './projects/Project'
import Footer from './footer/Footer'
import { FAQ } from './services/AskQuestions'
import Services from './services/services'

function App() {
  return (
    <>
      <Home />
      <Services />
      <Project />
      <Footer />
    </>
  )
}

export default App
