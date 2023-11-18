"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
// icons
import { Icons } from "components/icons"

type BreadcrumbsProps = {
  children: any
}

const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center">
        <button
          type="button"
          className="border-custom-sidebar-border-200 hover:bg-custom-sidebar-background-90 group grid h-7 w-7 shrink-0 cursor-pointer place-items-center rounded border text-center text-sm"
          onClick={() => router.back()}
        >
          <Icons.arrowLeft className="text-custom-sidebar-text-200 group-hover:text-custom-sidebar-text-100 text-base leading-4 w-4 h-4" />
        </button>
        {children}
      </div>
    </>
  )
}

type BreadcrumbItemProps = {
  title: string
  link?: string
  icon?: JSX.Element
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  title,
  link,
  icon,
}) => (
  <>
    {link ? (
      <Link href={link}>
        <div className="border-r-2 px-3 text-sm">
          <p className={`${icon ? "flex items-center gap-2" : ""}`}>
            {icon ?? null}
            {title}
          </p>
        </div>
      </Link>
    ) : (
      <div className="max-w-64 px-3 text-sm">
        <p className={`${icon ? "flex items-center gap-2" : ""}`}>
          {icon}
          <span className="break-words">{title}</span>
        </p>
      </div>
    )}
  </>
)

Breadcrumbs.BreadcrumbItem = BreadcrumbItem

export { Breadcrumbs, BreadcrumbItem }
