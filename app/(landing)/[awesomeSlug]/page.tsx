"use client"

import React, { useState } from "react"
import { NextPage } from "next"
import Link from "next/link"
import { useParams } from "next/navigation"

import { siteMap } from "@/config/awesome"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

const AwesomePage: NextPage = () => {
  const { awesomeSlug } = useParams()
  const AWESOME_SLUG = awesomeSlug.toString() ?? ""
  const awesome = siteMap.find((item) => item.key === AWESOME_SLUG)?.link ?? []

  interface AwesomeCopy {
    name: string
    isCopied: boolean
  }
  const [awesomeCopy, setAwesomeCopy] = useState<AwesomeCopy[]>([])

  if (!awesome.length) {
    return (
      <div className="container relative overflow-y-auto p-4 h-full w-full">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-semibold">Coming soon! 🚀🚀🚀</h1>
          <p className="text-sm">
            We are working hard to bring you the best experience.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container relative overflow-y-auto p-4 h-full w-full">
      <div className="grid grid-cols-2 gap-4 w-full">
        {awesome
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative overflow-hidden rounded-md border p-4 flex justify-between items-center"
              )}
            >
              <div className="flex flex-col gap-2 px-2">
                <div>
                  <Link
                    className="text-md font-semibold hover:underline"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </Link>
                  <p className="text-xs">{item.description}</p>
                </div>
                <div className={cn("flex gap-2 text-xs items-center")}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "text-blue-500 hover:cursor-pointer flex items-center gap-1"
                    )}
                  >
                    <Icons.externalLink className="w-4 h-4" />
                    <span className="ml-1 text-xs">
                      {/* {item.link.replace("https://", "")} */}
                      View
                    </span>
                  </Link>
                  <Separator
                    orientation="vertical"
                    className="h-4 border border-gray-300"
                  />
                  <Link
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "text-blue-500 hover:cursor-pointer flex items-center gap-1"
                    )}
                  >
                    <Icons.eye className="w-4 h-4" />
                    <span className="ml-1 text-xs">Demo</span>
                  </Link>
                  <Separator
                    orientation="vertical"
                    className="h-4 border border-gray-300"
                  />
                  <Link
                    href={item.docs}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "text-blue-500 hover:cursor-pointer flex items-center gap-1"
                    )}
                  >
                    <Icons.bookmark className="w-4 h-4" />
                    <span className="ml-1 text-xs">Docs</span>
                  </Link>
                </div>
              </div>
              <Button
                className="absolute top-0 right-0 m-2"
                variant="ghost"
                size="icon"
                onClick={() => {
                  navigator.clipboard.writeText(item.link)
                  setAwesomeCopy((prev) => [
                    ...prev,
                    { name: item.name, isCopied: true },
                  ])
                  setTimeout(() => {
                    setAwesomeCopy((prev) =>
                      prev.filter((item) => item.name !== item.name)
                    )
                  }, 1000)
                }}
              >
                {/* <Icons.copy className={cn("h-4 w-4")} /> */}
                {awesomeCopy.find((copy) => copy.name === item.name)
                  ?.isCopied ? (
                  <Icons.checkCircle className={cn("h-4 w-4")} />
                ) : (
                  <Icons.copy className={cn("h-4 w-4")} />
                )}
              </Button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default AwesomePage
