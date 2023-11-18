"use client"

import { ReactElement, ReactNode } from "react"
import { store } from "@/redux/store"
import { Provider } from "react-redux"

export default function ReduxProvider({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return <Provider store={store}>{children}</Provider>
}
