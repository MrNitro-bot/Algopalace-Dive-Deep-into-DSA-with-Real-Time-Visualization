"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth/auth-modal"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut } from "lucide-react"

export function UserButton() {
  const { user, profile, signOut, isLoading } = useAuth()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")

  const openLoginModal = () => {
    setAuthMode("login")
    setIsAuthModalOpen(true)
  }

  const openSignUpModal = () => {
    setAuthMode("signup")
    setIsAuthModalOpen(true)
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled>
          Log in
        </Button>
        <Button size="sm" disabled>
          Sign up
        </Button>
      </div>
    )
  }

  if (!user) {
    return (
      <>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={openLoginModal}>
            Log in
          </Button>
          <Button size="sm" onClick={openSignUpModal}>
            Sign up
          </Button>
        </div>
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} initialMode={authMode} />
      </>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
          <User className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {profile?.full_name || "User"}
          <p className="text-xs font-normal text-muted-foreground">{user.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
