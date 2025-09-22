import { useEffect, useState } from 'react';
import './home.css'
import SplitText from '../components/animations/SplitText';

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
                <SplitText
                    text="Planos Y"
                    className="h1 text-white text-7xl md:text-9xl font-bebas"
                    delay={100}
                    duration={800}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
                {showSecondText && (
                    <SplitText
                        text="Proyectos"
                        className="h1 relative text-white text-7xl md:text-9xl font-bebas"
                        delay={100}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                )}
                <h3 className="text-gray-200 text-2xl md:text-4xl font-semibold">MAESTRO MAYOR DE OBRAS</h3>
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