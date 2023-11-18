import { FC, useState } from "react"

import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export const useSheet = () => {
  const [isOpen, setIsOpen] = useState(false)
  type SheetProps = {
    button?: JSX.Element
    title: string
    description: string
    noButton?: boolean
    content: JSX.Element
    footer?: JSX.Element
    side?: "left" | "right" | "bottom" | "top"
    className?: string
  }

  const SheetComponent: FC<SheetProps> = ({
    button,
    title,
    description,
    noButton,
    content,
    footer,
    side = "right",
    className,
  }) => {
    return (
      <Sheet onOpenChange={setIsOpen} open={isOpen}>
        <SheetTrigger asChild className={cn(noButton && "hidden")}>
          {button}
        </SheetTrigger>
        <SheetContent side={side} className={className}>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
          {content}
          {footer && <SheetFooter>{footer}</SheetFooter>}
        </SheetContent>
      </Sheet>
    )
  }
  return { SheetComponent, setIsOpen }
}
