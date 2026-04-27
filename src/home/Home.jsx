import { useEffect, useState } from 'react';
import './home.css'
import { FaWhatsapp } from 'react-icons/fa';
import AnimatedContent from '../components/animations/AnimatedContent';

function Home() {
    const images = [
        "images/home1.png",
        "/images/frentes.jpg",
        "/images/GONZALEZ-MITRE.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showSecondText, setShowSecondText] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondText(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Debug: ver qué imagen se está mostrando
    console.log('Current image:', images[currentImageIndex]);

    return (
        <section 
            className="pl-6 md:pl-24 home relative flex flex-col md:min-h-screen h-[95vh]"
            style={{ 
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="relative z-2 flex-1 flex flex-col justify-center items-start">
                <AnimatedContent direction="horizontal" reverse={true} distance={60} threshold={0.1}>
                    <h1 className="h1 text-white text-7xl md:text-9xl font-bebas">Planos Y</h1>
                </AnimatedContent>
                {showSecondText && (
                    <AnimatedContent direction="horizontal" distance={60} threshold={0.1} delay={120}>
                        <h1 className="h1 relative text-white text-7xl md:text-9xl font-bebas">Proyectos</h1>
                    </AnimatedContent>
                )}
                <h3 className="text-gray-200 text-2xl md:text-4xl font-semibold">MAESTRO MAYOR DE OBRAS</h3>
                <a
                    href="https://api.whatsapp.com/send?phone=542284582635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 group relative w-fit bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-550 hover:to-orange-650 text-white font-bold py-3 px-6 transition-all duration-300 text-center text-sm uppercase active:scale-95 overflow-hidden flex items-center gap-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <span className="relative flex items-center gap-2">
                        <FaWhatsapp size={18} />
                        Hablemos
                    </span>
                </a>
            </div>
{/* 
            <div className="pr-6 md:pr-24 relative z-2 flex flex-row gap-2 w-full justify-end">
                {projects.map((project, index) => (
                    <Link
                        key={projects.id}
                        to={`/proyecto/${project.id}`}
                        className="flex flex-col"
                    >
                        <img
                            key={index}
                            src={project.images[0]}
                            alt=""
                            className="border-2 border-solid border-white w-20 h-20
                            md:h-24 md:w-24 
                            lg:h-32 lg:w-32 object-cover  -2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
                        />
                    </Link>
                ))}
            </div> */}
        </section>
    );
}

export default Home;