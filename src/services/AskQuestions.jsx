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
    <Card className="border-finito mt-24 w-full md:max-w-screen max-w-3xl mx-auto bg-[#0e0e10]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Preguntas Frecuentes</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {filteredFAQs.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="cursor-pointer">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {filteredFAQs.length === 0 && <p className="text-center text-gray-500 mt-4">No matching questions found.</p>}
      </CardContent>
    </Card>
  )
}

