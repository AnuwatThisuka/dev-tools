"use client"

import { queryClient } from "@/react-query/queryClient"
import ReduxProvider from "@/redux/provider"
import { QueryClientProvider } from "@tanstack/react-query"

import { ThemeProvider } from "@/components/theme-provider"

interface ContextProps {
  children: React.ReactNode
}

const Context: React.FC<ContextProps> = ({ children }) => (
  <ReduxProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  </ReduxProvider>
)

export default Context
