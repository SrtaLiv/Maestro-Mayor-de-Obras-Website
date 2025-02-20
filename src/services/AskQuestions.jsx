"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"

// Sample FAQ data
const faqData = [
  {
    question: "What is shadcn/ui?",
    answer:
      "shadcn/ui is a collection of re-usable components built using Radix UI and Tailwind CSS. It's not a component library, but a collection of re-usable components that you can copy and paste into your apps.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, shadcn/ui is free and open-source. You can use it in your personal and commercial projects.",
  },
  {
    question: "Can I use it with Next.js?",
    answer: "shadcn/ui works great with Next.js and other React-based frameworks.",
  },
  {
    question: "How do I install shadcn/ui?",
    answer:
      "You can install shadcn/ui components using the CLI. Run 'npx shadcn@latest init' in your project directory to get started.",
  },
  {
    question: "Is shadcn/ui responsive?",
    answer:
      "Yes, the components are designed to be responsive out of the box. However, you may need to adjust layouts for specific use cases.",
  },
]

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter FAQ items based on the search term
  const filteredFAQs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {filteredFAQs.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {filteredFAQs.length === 0 && <p className="text-center text-gray-500 mt-4">No matching questions found.</p>}
      </CardContent>
    </Card>
  )
}

