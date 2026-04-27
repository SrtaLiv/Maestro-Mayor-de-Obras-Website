"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedContent from "../components/animations/AnimatedContent"

// Datos de ejemplo
const faqData = [
  {
    question: "¿Qué hace un Maestro Mayor de Obras?",
    answer:
      "Un Maestro Mayor de Obras es un profesional especializado en la planificación, dirección y ejecución de proyectos de construcción, asegurando que se cumplan las normativas y estándares de calidad.",
  },
  {
    question: "¿Cuáles son las responsabilidades principales?",
    answer:
      "Incluyen la elaboración de planos, dirección de obras, supervisión de trabajadores, cálculo de materiales y coordinación con arquitectos e ingenieros.",
  },
  {
    question: "¿Pueden diseñar y firmar planos?",
    answer:
      "Sí, un Maestro Mayor de Obras puede diseñar y firmar planos para construcciones de pequeña y mediana escala, siempre dentro del marco legal vigente.",
  },
  {
    question: "¿Cuál es la diferencia entre un Maestro Mayor de Obras y un Arquitecto?",
    answer:
      "El Maestro Mayor de Obras está más enfocado en la ejecución y supervisión técnica de la obra, mientras que el Arquitecto se centra en el diseño y planificación urbanística.",
  },
  {
    question: "¿Puede encargarse de presupuestos y cálculos de materiales?",
    answer:
      "Sí, uno de los roles fundamentales es la elaboración de presupuestos detallados y el cálculo preciso de materiales según las necesidades del proyecto.",
  },
  {
    question: "¿Es necesario contratar a un Maestro Mayor de Obras para una construcción?",
    answer:
      "Depende del tipo de obra. Para construcciones pequeñas, reformas y ampliaciones, puede ser suficiente. En proyectos más complejos, se requiere también la intervención de un arquitecto o ingeniero.",
  },
];

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFAQs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="faq" className="bg-[#0e0e10] px-6 md:px-24 py-20 flex justify-center">
      <Card className="w-full flex flex-col md:flex-row items-start md:max-w-screen bg-[#0e0e10]">
        {/* Título y descripción */}
        <AnimatedContent direction="horizontal" reverse={true} distance={60} threshold={0.1}>
          <div className="mb-8 md:mb-0 md:pr-12 flex-1">
            <h1 className="text-white text-5xl md:text-6xl mb-6">Preguntas</h1>
            <p className="text-gray-400">Aquí encontrarás respuestas a las preguntas más frecuentes.</p>
          </div>
        </AnimatedContent>

        {/* Accordion */}
        <AnimatedContent direction="horizontal" distance={60} threshold={0.1} delay={150}>
        <CardContent className="flex-1 w-full">
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="py-2">
                <AccordionTrigger className="cursor-pointer text-lg md:text-xl lg:text-2xl font-semibold text-white hover:text-orange-400 transition-colors duration-300 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-gray-300 leading-relaxed pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No se encontraron preguntas coincidentes.</p>
          )}
        </CardContent>
        </AnimatedContent>
      </Card>
    </section>
  )
}
