import React from "react"
import { NextPage } from "next"
import Link from "next/link"

import { siteMap } from "@/config/awesome"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

const IndexPage: NextPage = () => {
  return (
    <div className="container relative overflow-y-auto p-4 h-full w-full">
      <div className="grid grid-cols-3 gap-4 w-full">
        {siteMap
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item, i) => (
            <Link
              key={i}
              className={cn(
                "relative overflow-hidden rounded-md border p-2 flex justify-between items-center",
                "hover:bg-accent cursor-pointer",
                "transition-colors duration-300",
                "hover:shadow-lg",
                "hover:border-transparent",
                "h-16"
              )}
              href={`/${item.key}`}
            >
              <div className="flex items-center gap-4">
                <Icons.gitHub className="h-8 w-8 border rounded-md p-2" />
                <div>
                  <h1 className="text-md font-semibold">{item.name}</h1>
                  <p
                    className="text-xs text-gray-500
                  "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default IndexPage
