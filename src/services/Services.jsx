import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CircleDollarSign, HardHat, Ruler, FocusIcon as Foundation } from "lucide-react";

function Services() {
    return (
        <section className="px-12 md:px-24 sm:px-4 min-h-screen flex justify-center flex-col py-20 sm:py-16">
            <div className="">
                <h2 className="text-black  text-5xl md:text-6xl sm:text-5xl font-inter mb-8 font-semibold">Servicios</h2>
                <p className="mb-3.5">Estos son nuestros servicios mas solicitados. Queremos brindarte nuestro mejor experiencia personalizado, comoda y facil puedes puedes chequear entre estos o consultarnos por WhatsApp para asesorarte.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        title: "Asesoramiento Técnico:",
                        description: "High-quality interior finishing work with attention to detail",
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
                    <Card backgroundColor="[#1080A0]" className="border-gray-100 border-2 border-solid
  bg-white services-card h-full w-full px-7 group hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg">
                        <CardContent className="pt-6">
                            <div className="flex justify-center mb-6">
                                <service.icon className="w-16 h-16 text-[#1080A0]" />
                            </div>
                            <h3 className="text-black text-xl font-semibold mb-1">{service.title}</h3>
                            <p className="text-black text-muted-foreground mb-6">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Services;
