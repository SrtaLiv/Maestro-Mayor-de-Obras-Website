
function Footer() {
    return (
        <footer id="footer" className="h-[95vh] md:h-[40vh] flex flex-col flex-wrap justify-between md:flex-row lg:flex-row px-4 py-12 sm:py-16 md:px-24 bg-black">
            <div className="mb-8 mr-4 flex flex-col">
                <img className="h-24 w-48" src="images/LOGO.png" alt="Marcelo Todesco Logo" />
            </div>

            <div className="mb-8 mr-4 flex flex-col text-1xl">
                <h2 className="text-2xl text-white font-bold">Links</h2>
                <a className="mt-2 text-white" href="">Inicio</a>
                <a className="mt-2 text-white" href="">Contactame</a>
                <a className="mt-2 text-white" href="">Servicios</a>
            </div>

            <div className="flex-col  mr-4 mb-8 md:mb-0">
                <h2 className="text-2xl text-white font-bold">Contáctame</h2>
                <a href="tel:+542284582635" className="mt-2 text-white hover:underline flex items-center">
                    +54 9 2284582635
                </a>
                <a href="mailto:marcelotodesco@gmail.com" className=" mt-2 text-white hover:underline flex items-center">
                    marcelotodesco@gmail.com
                </a>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Olavarria+General+Paz+3150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-white hover:underline flex items-center"
                >
                    General Paz 3150
                </a>
            </div>

            <div className="relative w-full md:w-1/4 h-40">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7636.2797845058285!2d-60.32630327995933!3d-36.89549077450638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959445ced08374b1%3A0x2e2912fe370e432c!2sGral.%20Paz%203150%2C%20B7400%20Olavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1sen!2sar!4v1740361977683!5m2!1sen!2sar"
                    height={450}
                    width={200}
                    className="rounded-lg top-0 left-0 w-full h-40 border-0"
                    loading="lazy">
                </iframe>
            </div>
        </footer>
    );
}
export default Footer

