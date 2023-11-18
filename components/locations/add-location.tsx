import React, { FC } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { useSheet } from "../custom-ui/hooks/useSheet"

const AddLocation: FC = () => {
  const { SheetComponent: AddLocationSheet } = useSheet()
  return (
    <div className="flex border justify-between items-center px-4 py-6 rounded-md">
      <div className="">
        <h1 className="text-xl font-bold">Locations</h1>
        <p className="text-gray-500 text-sm">
          Manage the places you stock inventory, fulfill orders, and sell
          products.
        </p>
      </div>
      <div>
        <AddLocationSheet
          title="Add a new location"
          description="Add a new location to manage your inventory, fulfill orders, and sell products."
          button={<Button>Add location</Button>}
          content={<></>}
        />
      </div>
    </div>
  )
}

export default AddLocation
