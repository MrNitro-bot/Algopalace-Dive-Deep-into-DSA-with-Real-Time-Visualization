"use client"

import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Cpu } from "lucide-react"
import { AuthProvider } from "@/contexts/auth-context"
import { UserButton } from "@/components/auth/user-button"

const inter = Inter({ subsets: ["latin"] })

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <div className="min-h-screen flex flex-col mx-auto max-w-screen-2xl">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-6 w-6" />
                    <Link href="/" className="text-xl font-bold">
                      AlgoPalace
                    </Link>
                  </div>
                  <nav className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/" className="font-medium transition-colors hover:text-primary">
                      Home
                    </Link>
                    <Link
                      href="/data-structures"
                      className="font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Data Structures
                    </Link>
                    <Link
                      href="/algorithms"
                      className="font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Algorithms
                    </Link>
                    <Link
                      href="/learning-journey"
                      className="font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Learning Journey
                    </Link>
                    <Link
                      href="/submissions"
                      className="font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Submissions
                    </Link>
                    <Link
                      href="/roadmap"
                      className="font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Roadmap
                    </Link>
                  </nav>
                  <div className="md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                      onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    id="mobile-menu"
                    className="hidden absolute top-16 left-0 right-0 bg-background border-b z-50 md:hidden"
                  >
                    <div className="space-y-1 px-4 py-4">
                      <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
                        Home
                      </Link>
                      <Link
                        href="/data-structures"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                      >
                        Data Structures
                      </Link>
                      <Link
                        href="/algorithms"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                      >
                        Algorithms
                      </Link>
                      <Link
                        href="/learning-journey"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                      >
                        Learning Journey
                      </Link>
                      <Link
                        href="/submissions"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                      >
                        Submissions
                      </Link>
                      <Link href="/roadmap" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted">
                        Roadmap
                      </Link>
                    </div>
                  </div>
                  <UserButton />
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t py-6 md:py-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2024 AlgoPalace. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                      Terms
                    </Link>
                    <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                      Privacy
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
