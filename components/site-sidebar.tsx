"use client"

import { FC, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { SidebarHelp } from "./sidebar-help"
import { WorkspaceSidebarMenu } from "./sidebar-menu"
import { Button } from "./ui/button"

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    console.clear()
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-y-0 z-20 flex h-full shrink-0 grow-0 flex-col border-r duration-300 md:relative",
        !isOpen ? "left-0" : "-left-full md:left-0"
      )}
    >
      <div className={cn("flex h-full w-full flex-1 flex-col")}>
        <div
          className={cn(
            "flex w-full items-center justify-between gap-2 px-2 pt-4",
            isOpen ? "justify-center" : "justify-center"
          )}
        >
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "group flex items-center justify-start gap-2.5",
              isOpen ? "w-full justify-start" : "w-full justify-center"
            )}
          >
            <Avatar className="h-6 w-6 cursor-pointer">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary/10">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-7.64 16.32 4.5 4.5 0 0 0 8.28 0A10 10 0 0 0 12 2zm0 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"></path>
                </svg>
              </AvatarFallback>
            </Avatar>
            {isOpen && (
              <p className="text-sm font-semibold">
                <span className="text-primary">Awesome</span> App
              </p>
            )}
          </Button>
        </div>
        <WorkspaceSidebarMenu isOpen={isOpen} />
        <div className="h-full overflow-y-auto px-4"></div>
        <SidebarHelp
          {...{
            setIsOpen,
            isOpen,
          }}
        />
      </div>
    </div>
  )
}
