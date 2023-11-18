import { Fragment } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

const sidebarLinks = () => [
  {
    Icon: <Icons.hash className="h-5 w-5" />,
    name: "Awesome-react-components",
    href: `/`,
  },
]

export type WorkspaceSidebarMenuProps = {
  isOpen: boolean
}

export const WorkspaceSidebarMenu: React.FC<WorkspaceSidebarMenuProps> = ({
  isOpen,
}) => {
  const pathname = usePathname()

  return (
    <div className="mt-5 w-full cursor-pointer space-y-2 px-2">
      {sidebarLinks().map((link, index) => {
        const isActive =
          link.name === "Awesome-react-components" ||
          link.name === "React ecosystem"
            ? pathname.includes(link.href)
            : pathname === link.href
        return (
          <Fragment key={index}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={link.href} aria-controls="mobile-menu">
                    <div
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "group flex w-full items-center gap-2.5",
                        !isOpen ? "justify-center" : " justify-start",
                        index === 0 ? "mt-0" : "mt-2",
                        isActive ? "bg-primary/10" : "bg-transparent"
                      )}
                      aria-label="Sample Tabs"
                    >
                      {link.Icon}
                      {isOpen && link.name}
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className={cn(isOpen && "hidden")}>
                  {link.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Fragment>
        )
      })}
    </div>
  )
}
