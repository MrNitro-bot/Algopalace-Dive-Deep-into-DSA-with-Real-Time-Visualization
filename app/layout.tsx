import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Cpu } from "lucide-react"
import { AuthProvider } from "@/contexts/auth-context"
import { UserButton } from "@/components/auth/user-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AlgoMaster - Learn Data Structures and Algorithms",
  description: "Interactive platform to learn and practice data structures and algorithms",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
                      AlgoMaster
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
                  <UserButton />
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t py-6 md:py-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2024 AlgoMaster. All rights reserved.
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
