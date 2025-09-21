
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
import { FAQ } from '../services/AskQuestions';

function Project() {

    return (
        <section id='proyectos' className="px-4 md:px-24 bg-[#0e0e10] min-h-screen flex justify-center flex-col py-20 sm:py-16">
            <div className="">
                <h1 className="text-white text-5xl md:text-6xl sm:text-5xl mb-6">Proyectos</h1>
            </div>
            <div className="w-full relative">
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
                                    <Card
                                        className="w-full h-[45vh] md:h-[50vh] lg:h-[55vh] relative overflow-hidden group cursor-pointer transition-all duration-300 "
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${project.images[0]})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        <CardContent className="flex flex-col items-start justify-end p-4 md:p-6 h-full relative z-10">
                                            <div className="space-y-2 mb-3">
                                                <h3 className="text-lg md:text-xl text-white font-semibold line-clamp-2 group-hover:text-orange-400 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-gray-200 line-clamp-3 opacity-90">
                                                    {project.shortDescription}
                                                </p>
                                            </div>
                                            <Link
                                                key={index}
                                                to={`/proyecto/${project.id}`}
                                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm transform "
                                            >
                                                Ver más
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Botones de navegación y ver todos */}
                    <div className="flex justify-between items-center mt-8 px-2">
                        {/* Botón Ver Todos a la izquierda */}
                        <Button
                            className="w-fit bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm transform"
                        >
                            Ver proyectos
                        </Button>

                        {/* Botones de navegación a la derecha */}
                        <div className="flex gap-3 justify-center items-center">
                            <CarouselPrevious className="top-6 relative left-0 transform-none bg-orange-500 hover:bg-orange-600 border-orange-500 text-white shadow-lg transition-all duration-300 p-6" />
                            <CarouselNext className="top-6 relative right-0 transform-none bg-orange-500 hover:bg-orange-600 border-orange-500 text-white shadow-lg transition-all duration-300 p-6" />
                        </div>
                    </div>
                </Carousel>
            </div>
            <FAQ />
        </section >
    );

}
export default Project

