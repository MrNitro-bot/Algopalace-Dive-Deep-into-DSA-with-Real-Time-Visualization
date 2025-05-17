import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DynamicProgrammingPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Link href="/algorithms" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Algorithms
        </Link>
      </div>

      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Dynamic Programming Algorithms</h1>
        <p className="text-muted-foreground mb-8">
          Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems.
          It is applicable to problems exhibiting the properties of overlapping subproblems and optimal substructure.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/algorithms/dynamic-programming/fibonacci" className="block">
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>Fibonacci Sequence</CardTitle>
                <CardDescription>
                  A classic example of dynamic programming to efficiently calculate Fibonacci numbers
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">Time Complexity: O(n)</div>
                <ArrowRight className="h-5 w-5 text-primary" />
              </CardContent>
            </Card>
          </Link>

          <Link href="/algorithms/dynamic-programming/knapsack" className="block">
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>0/1 Knapsack Problem</CardTitle>
                <CardDescription>
                  A fundamental dynamic programming problem with applications in resource allocation
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">Time Complexity: O(n×W)</div>
                <ArrowRight className="h-5 w-5 text-primary" />
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
