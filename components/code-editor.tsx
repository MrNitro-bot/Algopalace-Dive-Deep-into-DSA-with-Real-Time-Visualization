"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Save, Check, X } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"

interface TestCaseResult {
  passed: boolean
  input: string
  expectedOutput: string
  actualOutput: string
}

interface CodeEditorProps {
  language: string
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  output?: string
  problemId?: string
  problemTitle?: string
  algorithmType?: string
}

export function CodeEditor({
  language,
  defaultValue = "",
  value,
  onChange,
  output = "",
  problemId = "",
  problemTitle = "",
  algorithmType = "general",
}: CodeEditorProps) {
  const [code, setCode] = useState(value || defaultValue)
  const [editorOutput, setEditorOutput] = useState(output)
  const [isRunning, setIsRunning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [executionStats, setExecutionStats] = useState<{ time?: number; memory?: number }>({})
  const [input, setInput] = useState("")
  const [showInput, setShowInput] = useState(false)
  const [testCaseResults, setTestCaseResults] = useState<TestCaseResult[]>([])
  const [allTestsPassed, setAllTestsPassed] = useState<boolean | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (value !== undefined) {
      setCode(value)
    }
  }, [value])

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value
    setCode(newCode)
    if (onChange) {
      onChange(newCode)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const runCode = async () => {
    setIsRunning(true)
    setEditorOutput("Running code...\n")
    setExecutionStats({})
    setTestCaseResults([])
    setAllTestsPassed(null)

    try {
      const response = await fetch("/api/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
          problemId,
          input,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      setEditorOutput(result.output || "No output")
      setExecutionStats({
        time: result.executionTime,
        memory: result.memory,
      })

      if (result.testCaseResults) {
        setTestCaseResults(result.testCaseResults)
        setAllTestsPassed(result.allTestsPassed)
      }
    } catch (error: any) {
      setEditorOutput(`Error: ${error.message || "An error occurred while running the code"}`)
    } finally {
      setIsRunning(false)
    }
  }

  const submitCode = async () => {
    setIsSubmitting(true)
    setEditorOutput("Submitting solution...\n")
    setTestCaseResults([])
    setAllTestsPassed(null)

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
          problemId,
          problemTitle,
          algorithmType,
          input,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      setEditorOutput(
        "Solution submitted successfully.\n\n" + result.output + "\n\nYour submission has been saved to the database.",
      )
      setExecutionStats({
        time: result.executionTime,
        memory: result.memory,
      })

      if (result.testCaseResults) {
        setTestCaseResults(result.testCaseResults)
        setAllTestsPassed(result.allTestsPassed)
      }

      toast({
        title: result.allTestsPassed ? "Solution Accepted!" : "Solution Rejected",
        description: result.allTestsPassed
          ? "Your solution passed all test cases and has been saved."
          : "Your solution did not pass all test cases. Check the output for details.",
        variant: result.allTestsPassed ? "default" : "destructive",
      })
    } catch (error: any) {
      setEditorOutput(`Error: ${error.message || "An error occurred while submitting the code"}`)
      toast({
        title: "Submission failed",
        description: error.message || "An error occurred while submitting the code",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between bg-muted p-2 border-b">
        <div className="text-sm font-medium">{language.toUpperCase()}</div>
        <div className="flex items-center gap-2">
          {executionStats.time !== undefined && (
            <div className="text-xs text-muted-foreground">
              Runtime: {executionStats.time.toFixed(2)}s | Memory: {executionStats.memory}KB
            </div>
          )}
          {allTestsPassed !== null && (
            <Badge className={allTestsPassed ? "bg-green-500" : "bg-red-500"}>
              {allTestsPassed ? "Accepted" : "Rejected"}
            </Badge>
          )}
          <Button size="sm" variant="outline" onClick={() => setShowInput(!showInput)}>
            {showInput ? "Hide Input" : "Show Input"}
          </Button>
          <Button size="sm" onClick={runCode} disabled={isRunning}>
            <Play className="h-4 w-4 mr-1" /> Run
          </Button>
          <Button size="sm" variant="outline" onClick={submitCode} disabled={isSubmitting}>
            <Save className="h-4 w-4 mr-1" /> Submit
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 min-h-[300px] border-r flex flex-col">
          <textarea
            value={code}
            onChange={handleCodeChange}
            className="w-full flex-1 p-4 font-mono text-sm bg-background resize-none focus:outline-none"
            spellCheck="false"
          />
          {showInput && (
            <div className="border-t">
              <div className="p-2 bg-muted text-xs font-medium">Input</div>
              <textarea
                value={input}
                onChange={handleInputChange}
                className="w-full h-24 p-4 font-mono text-sm bg-background resize-none focus:outline-none"
                placeholder="Enter input for your program here..."
                spellCheck="false"
              />
            </div>
          )}
        </div>
        <div className="flex-1 p-4 font-mono text-sm bg-black text-white overflow-auto min-h-[300px]">
          {isRunning || isSubmitting ? (
            <div className="space-y-2">
              <p>{isRunning ? "Running code..." : "Submitting code..."}</p>
              <div className="space-y-1">
                <Skeleton className="h-4 w-full bg-gray-700" />
                <Skeleton className="h-4 w-3/4 bg-gray-700" />
                <Skeleton className="h-4 w-1/2 bg-gray-700" />
              </div>
            </div>
          ) : (
            <>
              <pre className="whitespace-pre-wrap">{editorOutput || "Run your code to see output here"}</pre>

              {testCaseResults.length > 0 && (
                <div className="mt-4 border-t border-gray-700 pt-4">
                  <h3 className="font-bold mb-2">Test Case Results:</h3>
                  <div className="space-y-3">
                    {testCaseResults.map((result, index) => (
                      <div key={index} className="border border-gray-700 rounded p-2">
                        <div className="flex items-center gap-2">
                          {result.passed ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <X className="h-4 w-4 text-red-500" />
                          )}
                          <span className="font-medium">
                            Test Case {index + 1}: {result.passed ? "Passed" : "Failed"}
                          </span>
                        </div>
                        <div className="mt-1 text-xs">
                          <div>
                            <span className="text-gray-400">Input:</span> {result.input}
                          </div>
                          <div>
                            <span className="text-gray-400">Expected:</span> {result.expectedOutput}
                          </div>
                          <div>
                            <span className="text-gray-400">Your Output:</span> {result.actualOutput}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
