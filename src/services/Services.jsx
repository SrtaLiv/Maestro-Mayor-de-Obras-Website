import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CircleDollarSign, HardHat, Ruler, FocusIcon as Foundation, ArrowDownRight } from "lucide-react";
import AnimatedContent from "../components/animations/AnimatedContent";

// Saber mas te redirige a wpp

function Services() {
    return (
        <section id="services" className="z-200 bg-[#0e0e10] px-6 gap-4 md:px-24 min-h-screen flex h-full flex-col py-20" data-speed="0.9">
            <div className="" data-speed="0.8">
                <AnimatedContent direction="horizontal" reverse={true} distance={60} threshold={0.1}>
                    <h1 className="h1 text-white text-5xl md:text-7xl font-bebas">Servicios</h1>
                </AnimatedContent>

                <AnimatedContent direction="horizontal" distance={60} threshold={0.1} delay={150}>
                    <p className="mt-4 md:text-lg text-base mb-8 md:mb-2 text-white">Nuestros servicios más solicitados. Brindamos asesoría personalizada y eficiente. Consulta nuestras opciones o contáctanos por WhatsApp.</p>
                </AnimatedContent>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {[
                    {
                        id: 1,
                        title: "Asesoramiento Técnico",
                        description: "Brindar soporte y recomendaciones a los clientes y otros profesionales sobre aspectos técnicos del proyecto.",
                        icon: Ruler,
                    },
                    {
                        id: 2,
                        title: "Elaboración de presupuestos",
                        description: "Presupuesto del proyecto y planos municipales.",
                        icon: CircleDollarSign,
                    },
                    {
                        id: 3,
                        title: "Dirección de obras",
                        description: "Técnica y ejecutiva, representación técnica.",
                        icon: HardHat,
                    },
                    {
                        id: 4,
                        title: "Proyectos para Inversionistas",
                        description: "Diseño ajustado a lotes y su máximo potencial. Cálculo estructural para edificaciones",
                        icon: Building2,
                    },
                ].map((service) => (
                    <AnimatedContent key={service.id} distance={60} delay={service.id * 150} threshold={0.1}>
                    <Card
                    backgroundColor="[#1a1a1a]" className=" bg-black/30 h-full w-full px-8 group hover:scale-102 transition-transform duration-300 ease-in-out hover:shadow-lg justify-between">
                        <CardContent className="flex flex-col py-6 md:py-8 lg:py-10 h-full justify-between">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between mb-4">
                                <service.icon className="w-16 h-16 text-orange-400" />
                                  <a href="https://api.whatsapp.com/send?phone=542284582635">
                                <button className="cursor-pointer btn-service  -lg bg-orange-400 p-3">
                                    <ArrowDownRight color="black" className="  rotate-280  " />
                                </button>
                            </a>
                                </div>
                                <h3 className="text-white text-xl font-semibold mb-1">{service.title}</h3>
                                
                                <p className="text-gray-300 text-muted-foreground mb-6">{service.description}</p>
                            </div>

                          
                        </CardContent>
                    </Card>
                    </AnimatedContent>
                ))}
            </div>
        </section>
    );
}

export default Services;
