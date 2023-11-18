import "@/styles/globals.css"
import { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"

import "react-toastify/dist/ReactToastify.css"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"

import Context from "./context"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const window = globalThis as any
  const theme = window.localStorage?.getItem("theme") || "system"

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <NextTopLoader
            color={
              theme === "light"
                ? "#000000"
                : theme === "dark"
                ? "#ffffff"
                : "#3f76ff"
            }
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            box-shadow={`0 0 10px ${
              theme === "light"
                ? "#000000"
                : theme === "dark"
                ? "#ffffff"
                : "#3f76ff"
            }, 0 0 5px ${
              theme === "light"
                ? "#000000"
                : theme === "dark"
                ? "#ffffff"
                : "#3f76ff"
            }`}
          />
          <Context>
            {children}
            {/* <TailwindIndicator /> */}
          </Context>
        </body>
      </html>
    </>
  )
}
