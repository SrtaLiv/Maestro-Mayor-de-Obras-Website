
import { Link } from 'react-router';
import { projects } from '../data/data';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Project() {
// TO DO: cuando hacen hover hacer un aumento scale en la imagen pero sin aumentar el tamaño. solo adentro hacer como un mini zoom
    return (
        <section id='proyectos' className="px-4 md:px-24 bg-[#0e0e10] min-h-screen flex justify-center flex-col py-20 sm:py-16" data-speed="0.95">
            <div className="" data-speed="0.8">
                <h1 className="text-white text-5xl md:text-6xl sm:text-5xl mb-6">Proyectos</h1>
            </div>
            <div className="w-full relative" data-speed="1.05">
                <Carousel
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                        slidesToScroll: 1,
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1">
                                            <Link
                                                key={index}
                                                to={`/proyecto/${project.id}`}
                                            >
                                    <Card className="w-full h-[55vh] md:h-[50vh] lg:h-[60vh] relative overflow-hidden group cursor-pointer">
                                        {/* Background image with zoom effect */}
                                        <div 
                                            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${project.images[0]})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        />
                                        <CardContent className="flex flex-col items-start justify-end p-4 md:p-6 h-full relative z-10">
                                            <div className="space-y-2 mb-3">
                                                <h3 className="text-lg md:text-xl text-white font-semibold line-clamp-2 group-hover:text-orange-400 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-gray-200 line-clamp-3 opacity-90">
                                                    {project.shortDescription}
                                                </p>
                                            </div>
                                    
                                        </CardContent>
                                    </Card>
                                </Link>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-between items-center mt-8 px-2">
                        <Link to="/proyectos">
                            <button
                                className="group relative w-fit bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-550 hover:to-orange-650 text-white font-bold py-3 px-6  -xl transition-all duration-300 text-center text-sm transform  uppercase  active:scale-95 overflow-hidden"
                            >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                            
                            <span className="relative flex items-center gap-2">
                                Ver proyectos
                                <svg 
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            </button>
                        </Link>

                        <div className="flex gap-3 justify-center items-center">
                            <CarouselPrevious className="top-6 relative left-0 transform-none bg-orange-500 hover:bg-orange-600 border-orange-500 text-white shadow-lg transition-all duration-300 p-6" />
                            <CarouselNext className="top-6 relative right-0 transform-none bg-orange-500 hover:bg-orange-600 border-orange-500 text-white shadow-lg transition-all duration-300 p-6" />
                        </div>
                    </div>
                </Carousel>
            </div>
        </section >
    );

}
export default Project

