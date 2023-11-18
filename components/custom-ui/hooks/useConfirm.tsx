import { FC, useState } from "react"

import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export const useConfirm = () => {
  const [isOpen, setIsOpen] = useState(false)
  type ConfirmProps = {
    button?: JSX.Element
    title: string
    description: string
    action: () => void
    cancel?: () => void
    noButton?: boolean
  }

  const Confirm: FC<ConfirmProps> = ({
    button,
    title,
    description,
    action,
    cancel,
    noButton,
  }) => {
    return (
      <AlertDialog onOpenChange={setIsOpen} open={isOpen}>
        <AlertDialogTrigger asChild className={cn(noButton && "hidden")}>
          {button ? (
            button
          ) : (
            <Button>
              <span>Delete</span>
            </Button>
          )}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>{description}</AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setIsOpen(false)
                cancel && cancel()
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setIsOpen(false)
                action()
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  return {
    Confirm,
    setIsOpen,
  }
}
