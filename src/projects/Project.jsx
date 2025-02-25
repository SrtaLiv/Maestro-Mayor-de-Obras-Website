
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

    return (
        <section id='proyectos' className="px-4 md:px-24 bg-[#0e0e10] min-h-screen flex justify-center flex-col py-20 sm:py-16">
            <div className="">
                <h2 className="text-white text-5xl md:text-6xl sm:text-5xl font-inter mb-8 font-semibold">Proyectos</h2>
            </div>
            <div className="w-full relative">
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-1">
                                <div className="p-1">
                                    <Card className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
                                        <CardContent className="flex flex-col items-start justify-center p-6 md:p-12 lg:p-16">

                                            <h3 className="text-2xl text-black font-semibold mb-2">{project.title}</h3>
                                            <p className="text-gray-300">{project.shortDescription}</p>
                                            <Link key={index} to={`/proyecto/${project.id}`}   className="cursor-pointer btn-service bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg mt-4 flex justify-center items-center hover:bg-orange-500 transition-all duration-300">Ver más</Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 z-10" />
                    <CarouselNext className="hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 z-10" />
                </Carousel>
            </div>
        </section >
    );

}
export default Project

