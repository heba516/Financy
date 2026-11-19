"use client"

import * as React from "react"
import { BellIcon, MailIcon, MessageSquareIcon } from "lucide-react"
import type { Selection } from "react-aria-components"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Icon } from "@iconify/react";


export function Notifications() {
  const [notifications, setNotifications] = React.useState<Selection>(
    new Set(["email", "push"])
  )

  return (
    <DropdownMenuTrigger>
        <Button
            variant="outline"
            aria-label="Notifications"
            className="p-2 border-none cursor-pointer text-gray hover:text-brand hover:bg-brand/10 rounded-full transition-colors"
            >
            <Icon icon="bytesize:bell" width="24" height="24" />
        </Button>
      
      <DropdownMenu dir="ltr" className="w-70 lg:w-80 bg-white py-3 px-3">
        <DropdownMenuGroup
          selectionMode="multiple"
          selectedKeys={notifications}
          onSelectionChange={setNotifications}
        >
          <DropdownMenuLabel>Notification</DropdownMenuLabel>
          <DropdownMenuItem id="email">
            <MailIcon />
            Email notifications
          </DropdownMenuItem>
          <DropdownMenuItem id="sms">
            <MessageSquareIcon />
            SMS notifications
          </DropdownMenuItem>
          <DropdownMenuItem id="push">
            <BellIcon />
            Push notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}
