import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import SingleProject from './projects/SingleProject.jsx';
import NavBar from './navbar/NavBar.jsx';
import AllProjects from './projects/AllProjects.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyecto/:id" element={<SingleProject />} />
        <Route path="/proyectos" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
