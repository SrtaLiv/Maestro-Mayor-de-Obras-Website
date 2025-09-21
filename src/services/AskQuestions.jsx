"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Sample FAQ data
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
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="mt-24 w-full md:max-w-screen bg-[#0e0e10]">
      <div className="">
        <h1 className="text-white text-5xl md:text-6xl sm:text-5xl mb-6">Preguntas</h1>
      </div>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* FAQ Section */}
          <div className="flex-1">
            <Accordion type="single" collapsible className="w-full space-y-1">
              {filteredFAQs.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 py-2">
                  <AccordionTrigger className="cursor-pointer text-lg md:text-xl lg:text-2xl font-semibold text-white hover:text-orange-400 transition-colors duration-300 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:text-orange-500 [&>svg]:hover:text-orange-400 py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-gray-300 leading-relaxed pb-6 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {filteredFAQs.length === 0 && <p className="text-center text-gray-500 mt-4">No matching questions found.</p>}
          </div>

          {/* Contact Sidebar - Only visible on LG+ */}
          <div className="hidden lg:block lg:w-80">
            <div className="sticky top-24 bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl p-6 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">¿Tenés otras preguntas?</h3>
                <p className="text-orange-400 font-semibold text-lg mb-4">¡Conversemos!</p>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+542284582635" 
                  className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  +54 9 2284 582635
                </a>

                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">También podés encontrarnos en:</p>
                  <p className="text-white text-sm">General Paz 3150, Olavarría</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

