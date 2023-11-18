import React, { FC } from "react"
import Link from "next/link"
import { toast } from "react-toastify"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { useConfirm } from "../custom-ui/hooks/useConfirm"
import { useSheet } from "../custom-ui/hooks/useSheet"
import { Icons } from "../icons"
import { Button } from "../ui/button"

const LocationsList: FC = () => {
  const { SheetComponent: Sheet, setIsOpen: setIsOpenSheet } = useSheet()

  const { Confirm: ConfirmDelete, setIsOpen: setIsOpenDelete } = useConfirm()
  return (
    <>
      {new Array(5).fill(0).map((_, i) => (
        <div
          key={i}
          className={cn(
            "border px-4 py-6 rounded-md space-y-6",
            i !== 0 && "mt-4"
          )}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icons.shoppingBag className="h-8 w-8 text-gray-500" />
              <div>
                <h1 className="text-md font-bold">Store name</h1>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, animi.
                </p>
              </div>
            </div>
            <div className={cn("flex gap-2")}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Icons.moreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions for Store name</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      setIsOpenSheet(true)
                    }}
                  >
                    <Icons.fileEdit className="h-4 w-4" />
                    <span className="ml-2">Edit location</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      setIsOpenDelete(true)
                    }}
                  >
                    <Icons.trash className="h-4 w-4 text-red-600" />
                    <span
                      className="ml-2 text-red-600
                    "
                    >
                      Delete location
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-gray-500 text-sm w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            deleniti porro at quis rem voluptatibus velit officia corporis
            dolorem harum?
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="default">
              10&nbsp;
              <span className="text-gray-500 text-xs">/ 10</span>
            </Badge>
            <p className="text-gray-500 text-xs">Mon - Fri, 9:00am - 5:00pm</p>
          </div>

          <Separator />
          <h1 className="text-xs font-bold">Items at this location</h1>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icons.shoppingBag className="h-8 w-8 text-gray-500" />
              <p className=" text-xs">Lorem ipsum dolor sit amet.</p>
              <Link href="/" className="text-gray-500 text-xs">
                + 2 more
              </Link>
            </div>
            <div>
              <Button variant="outline">View inventory</Button>
            </div>
          </div>
        </div>
      ))}
      <ConfirmDelete
        noButton
        title="Are you sure delete this location?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        action={() => {
          toast.promise(
            new Promise((resolve) => {
              setTimeout(() => {
                resolve("success")
              }, 1000)
            }),
            {
              pending: "Deleting...",
              success: "Deleted!",
              error: "Error",
            }
          )
        }}
        cancel={() => {}}
      />
      <Sheet
        noButton
        title="Edit location"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        content={
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
        }
        footer={
          <div className={cn("flex justify-end gap-4")}>
            <Button
              variant="outline"
              onClick={() => {
                setIsOpenSheet(false)
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                toast.promise(
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve("success")
                    }, 1000)
                  }),
                  {
                    pending: "Saving...",
                    success: "Saved!",
                    error: "Error",
                  }
                )
              }}
            >
              Save
            </Button>
          </div>
        }
      />
    </>
  )
}

export default LocationsList
