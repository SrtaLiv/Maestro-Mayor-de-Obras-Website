import { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router';
import { projects } from '../data/data';
import SplitText from '../components/animations/SplitText';

function Home() {
    const images = [
        "images/home1.png",
        "images/frentes.jpg",
        "images/GONZALEZ-MITRE.jpg"
    ];

    const [background, setBackground] = useState(projects[0]);
    const [showSecondText, setShowSecondText] = useState(false);
    let currentIndex = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setBackground(images[currentIndex]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondText(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="px-4 home relative flex flex-col md:min-h-screen h-[95vh] bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
            <div className="home absolute inset-0 bg-black bg-opacity-50 z-1"></div>
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
                <h3 className="text-white text-2xl md:text-4xl font-roboto">MAESTRO MAYOR DE OBRAS.</h3>
            </div>
            <div className="images-home relative z-2 flex flex-row gap-2 w-full justify-end">
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
                            className="border-2 border-solid border-white w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Home;