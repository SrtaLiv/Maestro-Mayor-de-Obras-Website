import './navbar.css'
import HamburgerMenu from "./hamburger-menu"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50); // Cambiar después de 50px de scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <nav className={`h-16 px-6 md:px-24 fixed top-0 w-full z-50 flex justify-between items-center transition-all duration-300 ease-in-out ${
                isScrolled 
                    ? 'bg-black shadow-lg ' 
                    : 'bg-transparent'
            }`}>
                {/* Logo */}
                <div className="flex-shrink-0 hidden md:block">
                    <a href="/" className="flex items-center h-14">
                        <img id="nav-logo" src="/images/LOGO.png" alt="Logo" className=" h-full " />
                    </a>
                </div>

                {/* Menu pantallas grandes */}
                <div className="hidden md:flex items-center gap-4 lg:space-x-2">
                    <a href='#' className="nav-link">
                        <h1 className="nav-text">INICIO</h1>
                    </a>

                    <a href='#services' className="nav-link">
                        <h1 className="nav-text">SERVICIOS</h1>
                    </a>

                    <a href="#proyectos" className="nav-link">
                        <h1 className="nav-text">PROYECTOS</h1>
                    </a>

                    <a href="#footer" className="nav-link">
                        <h1 className="nav-text">CONTACTO</h1>
                    </a>
                </div>

                {/* Menu en mobile */}
                <div className="flex-shrink-0 md:hidden">
                    <a href="/" className="flex h-12 items-center">
                        <img id="nav-logo" src="/images/LOGO.png" alt="Logo" className="" />
                    </a>
                </div>

                <div className="md:hidden pr-4 cursor-pointer" onClick={toggleMenu}>
                    <HamburgerMenu isOpen={isOpen} />
                </div>

                <div className={`absolute top-16 left-0 w-full bg-black transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"} md:hidden h-screen overflow-y-auto`}>
                    {/* Menu Items */}
                    <div className="px-6 py-8 space-y-2">
                        <a href='#' onClick={closeMenu} className="block">
                            <h1 className="nav-text-mobile">INICIO</h1>
                        </a>

                        <a href='#services' onClick={closeMenu} className="block">
                            <h1 className="nav-text-mobile">SERVICIOS</h1>
                        </a>

                        <a href="#proyectos" onClick={closeMenu} className="block">
                            <h1 className="nav-text-mobile">PROYECTOS</h1>
                        </a>
                    </div>

                    {/* Contact Section */}
                    <div className='absolute bottom-8 left-4 right-4'>
                        <div className='nav-contact-container'>
                            <h3 className="nav-contact-title">CONTACTANOS</h3>

                            <a href="tel:+542284582635" className="nav-contact-item block" onClick={closeMenu}>
                                <span className="contact-icon">📞</span>
                                <span className="nav-contact-text">+54 9 2284 582635</span>
                            </a>

                            <a href="https://www.google.com/maps/search/?api=1&query=Olavarria+General+Paz+3150"
                                target="_blank"
                                className="nav-contact-item block"
                                onClick={closeMenu}>
                                <span className="contact-icon">📍</span>
                                <span className="nav-contact-text">General Paz 3150, Olavarría</span>
                            </a>

                            {/* Decorative element */}
                            <div className="flex justify-center mt-4">
                                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent  -full"></div>
                            </div>
                        </div>
                    </div>
                </div>



            </nav>


        </>
    );
}

export default NavBar 