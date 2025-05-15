"use client"

import { useState } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ProblemDetail } from "@/components/problem-detail"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Problem {
  id: string
  title: string
  difficulty: string
  description: string
  examples: {
    input: string
    output: string
    explanation?: string
  }[]
  starterCode: {
    cpp: string
    java: string
    python: string
    javascript: string
  }
}

interface ProblemListProps {
  problems: Problem[]
  category: string
}

export function ProblemList({ problems, category }: ProblemListProps) {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const router = useRouter()

  const filteredProblems =
    filter === "all"
      ? problems
      : problems.filter((problem) => problem.difficulty.toLowerCase() === filter.toLowerCase())

  const handleBackToProblemList = () => {
    setSelectedProblem(null)
  }

  return (
    <div>
      {selectedProblem ? (
        <ProblemDetail problem={selectedProblem} category={category} onBack={handleBackToProblemList} />
      ) : (
        <div className="space-y-6">
          <div className="flex items-center mb-6">
            <Link
              href="/data-structures"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Data Structures
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Problems</h2>
            <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="easy">Easy</TabsTrigger>
                <TabsTrigger value="medium">Medium</TabsTrigger>
                <TabsTrigger value="hard">Hard</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-4">
            {filteredProblems.map((problem) => (
              <Card
                key={problem.id}
                className="cursor-pointer hover:border-primary transition-colors"
                onClick={() => setSelectedProblem(problem)}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        {problem.id}. {problem.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">
                        {problem.description.split("\n")[0]}
                      </CardDescription>
                    </div>
                    <Badge
                      className={
                        problem.difficulty === "Easy"
                          ? "bg-green-500 hover:bg-green-600"
                          : problem.difficulty === "Medium"
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-red-500 hover:bg-red-600"
                      }
                    >
                      {problem.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
