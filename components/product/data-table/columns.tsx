"use client"

import * as React from "react"
import Image from "next/image"
import { IProductList } from "@/types"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { MODEL_OPTIONS, OPTIONS } from "./data"

export const columns: ColumnDef<IProductList>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Image",
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={
          "data:image/jpeg;base64,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"
        }
        alt={row.getValue("Image")}
        className="h-8 w-8 rounded-full"
        width={32}
        height={32}
      />
    ),
  },
  {
    accessorKey: "BrandName",
    header: "Brand name",
    cell: ({ row }) => {
      const NewBrandName = OPTIONS.find(
        (brandName) => brandName.value === row.getValue("BrandName")
      )
      if (!NewBrandName) {
        return null
      }
      return (
        <div className="flex w-[100px] items-center">
          <span>{NewBrandName.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "Description",
    header: "Description",
    cell: ({ row }) => <div>{row.getValue("Description")}</div>,
  },
  {
    accessorKey: "Model",
    header: "Model",
    cell: ({ row }) => {
      const NewModel = MODEL_OPTIONS.find(
        (model) => model.value === row.getValue("Model")
      )

      if (!NewModel) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{NewModel.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "Quantity",
    header: "Quantity",
    cell: ({ row }) => <div>{row.getValue("Quantity")}</div>,
  },
  {
    accessorKey: "PricePerUnit",
    header: "Price per unit",
    cell: ({ row }) => <div>{row.getValue("PricePerUnit")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Copy</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
