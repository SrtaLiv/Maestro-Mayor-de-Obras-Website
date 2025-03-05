import './navbar.css'
import HamburgerMenu from "./hamburger-menu"
import { useState } from 'react';
import { Link } from "react-router-dom";

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            {/* <ul className="h-16 fixed top-0 w-full z-50 flex justify-between content-center bg-black  " >
                <li>
                    <img className="nav-logo" src="/src/assets/images/LOGO.png" />
                </li>
                <li>
                    <ul>
                        <li className="flex  content-center hidden md:flex ">
                            <a> <h1 className="nav-text">INICIO</h1> </a>
                            <a> <h1 className="nav-text">PROYECTOS</h1> </a>
                            <a> <h1 className="nav-text">SERVICIOS</h1> </a>
                            <a> <h1 className="nav-text">CONTACTOS</h1> </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <div className="flex md:hidden ">
                        <div className="flex items-center justify-center min[840px]:hidden pr-8">
                            <HamburgerMenu />
                        </div>
                    </div>
                </li>
            </ul> */}

            <div className="h-16 fixed top-0 w-full z-50 flex justify-between content-center bg-black  " >
                {/* Logo */}
                {/* <Link to="/" ><img id="nav-logo" src="/images/LOGO.png" /></Link> */}
                <a href="/" ><img id="nav-logo" src="/images/LOGO.png" /></a>

                {/* Menu pantallas grandes */}
                {/* <div className={`menuItems ${isOpen ? "is-open" : ""}`} > */}
                <div className="hidden content-center md:flex ">
                    <a href='#'>
                        <h1 className="nav-text">INICIO</h1>
                    </a>

                    <a href='#services'>
                        <h1 className="nav-text">SERVICIOS</h1>
                    </a>

                    <a href="#proyectos">
                        <h1 className="nav-text">PROYECTOS</h1>
                    </a>

                    <a href="#footer">
                        <h1 className="nav-text">CONTACTOS</h1>
                    </a>
                </div>
                {/* </div> */}

                {/* burger button */}
                {/* <div className="flex md:hidden "> */}
                <div className="md:hidden pr-8 pt-2" onClick={toggleMenu}>
                    <HamburgerMenu isOpen={isOpen} />
                </div>
                {/* </div> */}

                {/* Menu en mobile */}

                {/* <div className={`absolute top-16 left-0 w-full bg-black p-4 flex flex-col space-y-4 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:hidden`}>
                    <h1 className="nav-text border-b-2 border-white border-t-1">INICIO</h1>
                    <h1 className="nav-text border-b-2 border-white">PROYECTOS</h1>
                    <h1 className="nav-text border-b-2 border-white">SERVICIOS</h1>
                    <h1 className="nav-text border-b-2 border-white">CONTACTOS</h1>
                </div> */}

                <div className={`absolute top-16 left-0 w-full bg-black p-4 flex flex-col divide-y divide-white space-y-4 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:hidden h-screen`}>
                    <a href='#'> 
                        <h1 className="nav-text-mobile " onClick={closeMenu} >INICIO</h1> 
                    </a>

                    <a href='#services'>
                        <h1 className="nav-text-mobile " onClick={closeMenu} >SERVICIOS</h1>
                    </a>

                    <a href="#proyectos">
                        <h1 className="nav-text-mobile " onClick={closeMenu} >PROYECTOS</h1>
                    </a>

                    <a href="#footer">
                        <h1 className="nav-text-mobile " onClick={closeMenu} >CONTACTOS</h1>
                    </a>

                    <div className='absolute bottom-25 left-0 w-full p-4 flex flex-col items-center ' >
                        <a href="tel:+542284582635" > <h2 className="nav-text" >+54 9 2284582635</h2> </a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Olavarria+General+Paz+3150" target="_blank"> 
                            <h2 className="nav-text" >General Paz 3150</h2> 
                        </a>
                    </div>
                    
                </div>



            </div>


        </>
    );
}

export default NavBar 