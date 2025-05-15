import { type NextRequest, NextResponse } from "next/server"
import { executeCode, formatExecutionResult } from "@/lib/code-execution-service"

export async function POST(request: NextRequest) {
  try {
    const { code, language, problemId, input = "" } = await request.json()

    if (!code || !language) {
      return NextResponse.json({ error: "Missing required fields: code or language" }, { status: 400 })
    }

    console.log(`Executing ${language} code for problem ${problemId}`)

    // Execute the code
    const executionResult = await executeCode(code, language, problemId, input)
    console.log("Execution result:", executionResult)

    // Format the result for display
    const formattedResult = formatExecutionResult(executionResult)

    // Determine if all tests passed
    const allTestsPassed = executionResult.testCaseResults
      ? executionResult.testCaseResults.every((tc) => tc.passed)
      : executionResult.status.id === 3

    return NextResponse.json({
      output: formattedResult,
      status: executionResult.status.description.toLowerCase(),
      executionTime: executionResult.time ? Number.parseFloat(executionResult.time) : 0,
      memory: executionResult.memory || 0,
      testCaseResults: executionResult.testCaseResults,
      allTestsPassed,
    })
  } catch (error: any) {
    console.error("Error running code:", error)
    return NextResponse.json({ error: error.message || "An error occurred while running the code" }, { status: 500 })
  }
}
