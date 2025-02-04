import { useEffect, useState } from 'react';
import './home.css'
//click a la imagen y cambia el fondo
// cambian las imagenes cada 3segundos.
// Cambio automático del fondo cada 3 segundos

function Home() {
    const images = [
        "images/home1.png",
        "images/frentes.jpg",
        "images/GONZALEZ-MITRE.jpg"
    ];

    const [background, setBackground] = useState(images[0]);
    let currentIndex = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setBackground(images[currentIndex]);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="home relative flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
            <div className="home absolute inset-0 bg-black bg-opacity-50 z-1"></div>
            <div className=" relative z-2 flex-1 flex flex-col justify-center items-start">
                <h1 className="text-white text-7xl md:text-9xl font-bebas">Planos Y<br />Proyectos</h1>
                <h3 className="text-white text-2xl md:text-4xl font-roboto">MAESTRO MAYOR DE OBRAS.</h3>
            </div>
            <div className="images-home relative z-2 flex flex-row gap-2 w-full justify-end">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        className="border-2 border-solid border-white w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
                        onClick={() => setBackground(img)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Home;