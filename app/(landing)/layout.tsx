"use client"

import React, { FC, useEffect } from "react"
import Link from "next/link"
import { useParams, usePathname, useRouter } from "next/navigation"

import { siteMap } from "@/config/awesome"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Icons } from "@/components/icons"
import { BreadcrumbItem, Breadcrumbs } from "@/components/shared/breadcrumbs"
import AppLayout from "@/components/shared/layout/app-layout"
import { Header } from "@/components/site-header"
import { ThemeToggle } from "@/components/theme-toggle"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { awesomeSlug } = useParams()
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const AWESOME_SLUG = awesomeSlug ?? ""
  const awesome = siteMap.find((item) => item.key === AWESOME_SLUG)?.link ?? []

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <AppLayout>
      <Header
        breadcrumbs={
          pathname !== "/" ? (
            <Breadcrumbs>
              <BreadcrumbItem title="Awesome react components" link="/" />
              {awesomeSlug && (
                <BreadcrumbItem
                  title={
                    awesomeSlug.toString().charAt(0).toUpperCase() +
                    awesomeSlug.toString().slice(1)
                  }
                />
              )}
            </Breadcrumbs>
          ) : (
            <></>
          )
        }
        left={
          pathname === "/" ? (
            <div className="flex items-center gap-2 pl-3">
              <Icons.hash className="h-6 w-6" />
              Awesome react components
            </div>
          ) : (
            <></>
          )
        }
        right={
          <div className="flex items-center justify-end gap-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Icons.grid className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Icons.list className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={() => setOpen(true)}
              className={cn(
                "hover:cursor-pointer",
                "w-64 flex items-center justify-between font-medium text-muted-foreground"
              )}
            >
              Search
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <Link
              href="www.github.com/anuwatthisuka/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "icon",
                variant: "outline",
              })}
            >
              <Icons.gitHub className="h-4 w-4" />
            </Link>
            <ThemeToggle />
          </div>
        }
      />
      {children}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder={
            pathname === "/"
              ? "Search for awesome react components"
              : "Search for awesome react components in " +
                awesomeSlug.toString().charAt(0).toUpperCase() +
                awesomeSlug.toString().slice(1)
          }
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
            heading={
              pathname === "/"
                ? "Awesome react components"
                : "Awesome react components in " +
                  awesomeSlug.toString().charAt(0).toUpperCase() +
                  awesomeSlug.toString().slice(1)
            }
          >
            {pathname === "/"
              ? siteMap
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item, i) => (
                    <CommandItem key={i}>
                      <Link
                        href={item.key}
                        onClick={() => {
                          setOpen(false)
                        }}
                        className="hover:cursor-pointer w-full h-full"
                      >
                        {item.name}
                      </Link>
                    </CommandItem>
                  ))
              : awesome
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item, i) => (
                    <CommandItem key={i}>
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:cursor-pointer w-full h-full"
                        onClick={() => {
                          setOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    </CommandItem>
                  ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </AppLayout>
  )
}

export default Layout
