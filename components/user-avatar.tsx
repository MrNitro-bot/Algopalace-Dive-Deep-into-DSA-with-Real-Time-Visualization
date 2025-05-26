"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface UserAvatarProps {
  name?: string | null
  email?: string | null
  avatarUrl?: string | null
  size?: "sm" | "md" | "lg"
  className?: string
}

// Function to generate a consistent color based on the user's name
function getAvatarColor(name: string): string {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-500",
  ]

  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}

// Function to get initials from name
function getInitials(name: string | null | undefined, email: string | null | undefined): string {
  if (name && name.trim()) {
    const words = name.trim().split(" ")
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase()
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase()
  }

  if (email) {
    return email.substring(0, 2).toUpperCase()
  }

  return "U"
}

export function UserAvatar({ name, email, avatarUrl, size = "md", className }: UserAvatarProps) {
  const initials = getInitials(name, email)
  const displayName = name || email || "User"
  const avatarColor = getAvatarColor(displayName)

  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-12 w-12 text-base",
  }

  return (
    <Avatar className={cn(sizeClasses[size], className)}>
      {avatarUrl && <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={displayName} />}
      <AvatarFallback className={cn(avatarColor, "text-white font-medium")}>{initials}</AvatarFallback>
    </Avatar>
  )
}
