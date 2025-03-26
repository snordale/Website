"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface DrawerProps {
  children?: React.ReactNode
  trigger?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
}

export function Drawer({
  children,
  trigger,
  open,
  onOpenChange,
  className,
}: DrawerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className={cn(
        "fixed bottom-0 left-0 right-0 translate-y-0 rounded-t-[10px] border-t",
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        "animate-in duration-300 ease-in-out",
        className
      )}>
        {children}
      </DialogContent>
    </Dialog>
  )
}
