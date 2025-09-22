
function Footer() {
    return (
        <footer id="footer" className="bg-black  h-[97vh] md:h-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16">
            <div className=" mx-auto justify-between flex flex-col h-full">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">

                    {/* Logo Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-start">
                        <img
                            className="h-10  md:h-24 w-auto mb-4"
                            src="images/LOGO.png"
                            alt="Marcelo Todesco Logo"
                        />
                        <p className="text-gray-400 text-sm sm:text-base text-left leading-relaxed">
                            Maestro Mayor de Obras especializado en construcción y dirección de proyectos.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col items-start">
                        <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">Links</h2>
                        <div className="space-y-2 flex flex-col items-start">
                            <a className="text-gray-300 hover:text-orange-500 transition-colors duration-300" href="#home">
                                Inicio
                            </a>
                            <a className="text-gray-300 hover:text-orange-500 transition-colors duration-300" href="#services">
                                Servicios
                            </a>
                            <a className="text-gray-300 hover:text-orange-500 transition-colors duration-300" href="#proyectos">
                                Proyectos
                            </a>
                            <a className="text-gray-300 hover:text-orange-500 transition-colors duration-300" href="#footer">
                                Contacto
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col items-start">
                        <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">Contáctame</h2>
                        <div className="space-y-3 flex flex-col items-start">
                            <a
                                href="tel:+542284582635"
                                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                +54 9 2284 582635
                            </a>
                            <a
                                href="mailto:marcelotodesco@gmail.com"
                                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                marcelotodesco@gmail.com
                            </a>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Olavarria+General+Paz+3150"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                General Paz 3150, Olavarría
                            </a>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <h2 className="text-xl hidden md:block sm:text-2xl text-white font-bold mb-4 text-left lg:text-left">
                            Ubicación
                        </h2>
                        <div className="relative w-full h-48 sm:h-56 lg:h-48  -lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7636.2797845058285!2d-60.32630327995933!3d-36.89549077450638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959445ced08374b1%3A0x2e2912fe370e432c!2sGral.%20Paz%203150%2C%20B7400%20Olavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1sen!2sar!4v1740361977683!5m2!1sen!2sar" className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-left sm:text-left">
                            © {new Date().getFullYear()} Marcelo Todesco - Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm">
                                Desarrollado por Nebula Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer

