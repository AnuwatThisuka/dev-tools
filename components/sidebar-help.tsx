import React from "react"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Button } from "./ui/button"

type SidebarHelpProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

export const SidebarHelp: React.FC<SidebarHelpProps> = ({
  setIsOpen,
  isOpen,
}) => {
  return (
    <div
      className={`border-custom-border-200 bg-custom-sidebar-background-100 flex w-full items-center justify-between gap-1 self-baseline border-t  ${
        !isOpen ? "flex-col py-2" : "px-4 py-2"
      }`}
    >
      {/* <div
        className={cn(
          "w-1/2 cursor-default rounded-md bg-green-500/10 px-2.5 py-1.5 text-center text-sm font-medium text-green-500 outline-none",
          !isOpen ? "hidden" : ""
        )}
      >
        <span>Help</span>
      </div> */}
      <Button
        variant="ghost"
        className={cn(
          "text-custom-text-200 flex justify-start gap-1 hover:bg-transparent",
          "hover:text-custom-text-100 focus:bg-transparent"
        )}
      >
        <Icons.helpCircle className="h-4 w-4" />
        <span
          className={cn(
            "text-custom-sidebar-text-200",
            !isOpen ? "hidden" : ""
          )}
        >
          Help
        </span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={cn("flex gap-1 px-1", "text-custom-text-200")}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Icons.arrowLeft className="h-4 w-4" />
        ) : (
          <Icons.arrowRight className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}
