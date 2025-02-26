"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

export default function HamburgerMenu({isOpen}) {
  /* const [isOpen, setIsOpen] = React.useState(false) */

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      /* onClick={() => setIsOpen(!isOpen)} */
      className="relative h-10 w-10 p-2"
    >
      <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2">
        <span
          className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
            isOpen ? "top-0 rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "top-0"}`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
            isOpen ? "top-0 -rotate-45" : "translate-y-2"
          }`}
        />
      </div>
    </Button>
  )
}

