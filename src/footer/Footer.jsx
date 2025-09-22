import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

function Footer() {
    return (
        <footer id="footer" className="text-white mt-16 bg-black ">
            {/* Google Maps */}
            <div className="w-full h-[40vh]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7636.2797845058285!2d-60.32630327995933!3d-36.89549077450638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959445ced08374b1%3A0x2e2912fe370e432c!2sGral.%20Paz%203150%2C%20B7400%20Olavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1sen!2sar!4v1740361977683!5m2!1sen!2sar"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="px-6 h-[54vh] md:px-12 lg:px-24 py-8 md:py-16 mx-auto flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start justify-between col-span-1 sm:col-span-2 lg:col-span-1">
                        <h1 className="h1 text-white text-5xl sm:text-6xl md:text-7xl font-bebas">
                            TRABAJEMOS JUNTOS
                        </h1>
                        <div className="flex gap-4">
                            <a className="hover:text-orange-500 transition-colors duration-300" href="tel:+542284582635"><FaWhatsapp size={40} />
                            </a>
                            <a className="hover:text-orange-500 transition-colors duration-300" href=""><FaInstagram size={40} />
                            </a>
                            <a className="hover:text-orange-500 transition-colors duration-300" href="">
                                <MdOutlineEmail
                                    size={40} />
                            </a>
                        </div>

                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col items-end">
                        <div className="space-y-2 flex flex-col items-start">
                            <a className="h1 text-2xl sm:text-3xl md:text-4xl hover:text-orange-500 transition-colors duration-300" href="#home">
                                Inicio
                            </a>
                            <a className="h1 text-2xl sm:text-3xl md:text-4xl hover:text-orange-500 transition-colors duration-300" href="#services">
                                Servicios
                            </a>
                            <a className="h1 text-2xl sm:text-3xl md:text-4xl hover:text-orange-500 transition-colors duration-300" href="#projects">
                                Proyectos
                            </a>
                            <a className="h1 text-2xl sm:text-3xl md:text-4xl hover:text-orange-500 transition-colors duration-300" href="#footer">
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className=" pt-30">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} Marcelo Todesco - Todos los derechos reservados.
                        </p>
                        <a
                            href="https://nebulasolutions.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                        >
                            Desarrollado por <span className="text-orange-500">Nebula Solutions</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
