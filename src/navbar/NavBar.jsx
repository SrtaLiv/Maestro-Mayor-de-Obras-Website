import './navbar.css'
import HamburgerMenu from "./hamburger-menu"
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const [hasPassedHero, setHasPassedHero] = useState(false);
    const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);

    useEffect(() => {
        const updateNavbarState = () => {
            const isDesktopViewport = window.innerWidth >= 768;
            setIsDesktop(isDesktopViewport);

            const heroSection = document.querySelector('.home-panel');
            const heroHeight = heroSection ? heroSection.clientHeight : window.innerHeight;
            const threshold = Math.max(heroHeight - 64, 0);

            setHasPassedHero(window.scrollY > threshold);
        };

        updateNavbarState();
        window.addEventListener('scroll', updateNavbarState, { passive: true });
        window.addEventListener('resize', updateNavbarState);

        return () => {
            window.removeEventListener('scroll', updateNavbarState);
            window.removeEventListener('resize', updateNavbarState);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    const shouldUseBlackBg = hasPassedHero || (!isDesktop && isOpen);

    return (
        <>
            <nav className={`h-16 px-6 md:px-24 fixed top-0 w-full z-50 flex justify-between items-center transition-all duration-300 ease-in-out ${shouldUseBlackBg ? 'bg-black' : 'bg-transparent'}`}>
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

                    <a
                        href="https://api.whatsapp.com/send?phone=542284582635"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 transition-all duration-300 uppercase text-sm"
                    >
                        <FaWhatsapp size={18} />
                        Hablemos
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
                        <a
                            href="https://api.whatsapp.com/send?phone=542284582635"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="flex items-center gap-2 bg-orange-500 text-white font-bold py-3 px-4 w-fit mt-2 uppercase text-base"
                        >
                            <FaWhatsapp size={22} />
                            Hablemos
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