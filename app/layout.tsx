import type React from "react"
import { Inter } from "next/font/google"
import ClientRootLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AlgoPalace - Learn Data Structures and Algorithms",
  description: "Interactive platform to learn and practice data structures and algorithms",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}


import './globals.css'