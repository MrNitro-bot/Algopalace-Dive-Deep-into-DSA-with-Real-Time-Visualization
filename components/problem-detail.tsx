"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CodeEditor } from "@/components/code-editor"
import { ArrowLeft } from "lucide-react"
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

interface ProblemDetailProps {
  problem: Problem
  category: string
  onBack?: () => void
}

export function ProblemDetail({ problem, category, onBack }: ProblemDetailProps) {
  const [language, setLanguage] = useState<string>("cpp")
  const [code, setCode] = useState<string>(problem.starterCode.cpp)
  const router = useRouter()

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    switch (lang) {
      case "cpp":
        setCode(problem.starterCode.cpp)
        break
      case "java":
        setCode(problem.starterCode.java)
        break
      case "python":
        setCode(problem.starterCode.python)
        break
      case "javascript":
        setCode(problem.starterCode.javascript)
        break
    }
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      router.push(`/data-structures/${category}`)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <button onClick={handleBack} className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")} Problems
        </button>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">
            {problem.id}. {problem.title}
          </h1>
          <Badge
            className={
              problem.difficulty === "Easy"
                ? "bg-green-500 hover:bg-green-600 mt-2"
                : problem.difficulty === "Medium"
                  ? "bg-yellow-500 hover:bg-yellow-600 mt-2"
                  : "bg-red-500 hover:bg-red-600 mt-2"
            }
          >
            {problem.difficulty}
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none dark:prose-invert">
            <div className="whitespace-pre-line">{problem.description}</div>

            <h3 className="text-lg font-medium mt-4">Examples:</h3>
            <div className="space-y-4">
              {problem.examples.map((example, index) => (
                <div key={index} className="bg-muted p-4 rounded-md">
                  <div className="font-mono">
                    <div>
                      <strong>Input:</strong> {example.input}
                    </div>
                    <div>
                      <strong>Output:</strong> {example.output}
                    </div>
                    {example.explanation && (
                      <div>
                        <strong>Explanation:</strong> {example.explanation}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-0">
          <Tabs defaultValue="cpp" value={language} onValueChange={handleLanguageChange}>
            <TabsList>
              <TabsTrigger value="cpp">C++</TabsTrigger>
              <TabsTrigger value="java">Java</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="pt-4">
          <CodeEditor
            language={language}
            value={code}
            onChange={setCode}
            problemId={problem.id}
            problemTitle={problem.title}
            algorithmType={category}
          />
        </CardContent>
      </Card>
    </div>
  )
}
