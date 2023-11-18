import React, { FC } from "react"

import { BreadcrumbItem, Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Header } from "@/components/site-header"
import { Sidebar } from "@/components/site-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="relative flex h-full w-full flex-col overflow-hidden">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
