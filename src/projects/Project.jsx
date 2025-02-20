import * as React from "react"

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
        <section className="bg-[#0e0e10] min-h-screen flex justify-center flex-col py-20 sm:py-16">
            <div className="px-12 md:px-24 sm:px-4">
                <h2 className="text-white text-5xl md:text-6xl sm:text-5xl font-inter mb-8 font-semibold">Proyectos</h2>
            </div>
            <div className="w-full relative">
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1">
                                <div className="p-1">
                                    <Card className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
                                        <CardContent className="flex flex-col items-start justify-center p-6 md:p-12 lg:p-16">
                                            <h3 className="text-2xl text-black font-semibold mb-2">Proyecto {index + 1}</h3>
                                            <p className="text-gray-300">Descripción breve del proyecto y sus características principales.</p>
                                            <Button className="cursor-pointer btn-service bg-orange-400 mt-4">Ver más</Button>
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
        </section>
    );

}
export default Project

