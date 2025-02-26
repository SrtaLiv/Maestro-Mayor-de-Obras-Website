import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CircleDollarSign, HardHat, Ruler, FocusIcon as Foundation } from "lucide-react";
import { FAQ } from "./AskQuestions";

// Saber mas te redirige a wpp

function Services() {
    return (
        <section id="services" className="bg-[#0e0e10] px-4 md:px-24 sm:px-4 min-h-screen flex justify-center flex-col py-20 sm:py-16">
            <div className="">
                <h2 className="text-white  text-5xl md:text-6xl sm:text-5xl font-inter mb-8 font-semibold">Servicios</h2>
                <p className="text-white mb-3.5">Nuestros servicios más solicitados. Brindamos asesoría personalizada y eficiente. Consulta nuestras opciones o contáctanos por WhatsApp.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        title: "Asesoramiento Técnico",
                        description: "Brindar soporte y recomendaciones a los clientes y otros profesionales sobre aspectos técnicos del proyecto.",
                        icon: Ruler,
                    },
                    {
                        title: "Elaboración de presupuestos",
                        description: "Presupuesto del proyecto y planos municipales.",
                        icon: CircleDollarSign,
                    },
                    {
                        title: "Dirección de obras",
                        description: "Técnica y ejecutiva, representación técnica.",
                        icon: HardHat,
                    },
                    {
                        title: "Proyectos para Inversionistas",
                        description: "Diseño ajustado a lotes y su máximo potencial. Cálculo estructural para edificaciones",
                        icon: Building2,
                    },
                ].map((service) => (
                    <Card backgroundColor="[#1a1a1a]" className="border-finito border-[1px] h-full w-full px-7 group hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg">
                        <CardContent className="pt-6">
                            <div className="flex justify-center mb-6">
                                <service.icon className="w-16 h-16 text-orange-400" />
                            </div>
                            <h3 className="text-white text-xl font-semibold mb-1">{service.title}</h3>
                            <p className="text-gray-300 text-muted-foreground mb-6">{service.description}</p>
                            <a href="https://api.whatsapp.com/send?phone=542284582635">
                                <Button className="cursor-pointer btn-service bg-orange-400">Más informacion
                                </Button>
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <FAQ />
        </section>
    );
}

export default Services;
