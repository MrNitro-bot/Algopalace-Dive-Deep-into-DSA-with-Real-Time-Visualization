import { getTestCases, validateOutput } from "./test-cases"

interface ExecutionResult {
  status: {
    id: number
    description: string
  }
  stdout: string
  stderr: string
  compile_output: string
  time: string
  memory: number
  testCaseResults?: {
    passed: boolean
    input: string
    expectedOutput: string
    actualOutput: string
  }[]
}

export async function executeCode(
  code: string,
  language: string,
  problemId: string,
  input = "",
): Promise<ExecutionResult> {
  try {
    // For C++, we need to ensure the code has a main function and includes iostream
    if (language === "cpp") {
      if (!code.includes("#include <iostream>") && !code.includes("#include<iostream>")) {
        code = "#include <iostream>\nusing namespace std;\n" + code
      }

      if (!code.includes("int main(") && !code.includes("void main(")) {
        code = `${code}\n\nint main() {\n    // Auto-generated main function\n    return 0;\n}`
      }
    }

    // Get test cases for the problem
    const testCases = getTestCases(problemId)

    // For now, we'll simulate the execution
    const result = simulateExecution(code, language, input, problemId)

    // If we have test cases, validate the output
    if (testCases.length > 0) {
      result.testCaseResults = []

      for (const testCase of testCases) {
        // Simulate execution with test case input
        const testResult = simulateExecution(code, language, testCase.input, problemId)
        const passed = validateOutput(testResult.stdout, testCase.expectedOutput)

        result.testCaseResults.push({
          passed,
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: testResult.stdout,
        })
      }

      // Update status based on test case results
      const allPassed = result.testCaseResults.every((tc) => tc.passed)
      if (allPassed) {
        result.status = { id: 3, description: "Accepted" }
      } else {
        result.status = { id: 4, description: "Wrong Answer" }
      }
    }

    return result
  } catch (error: any) {
    console.error("Error executing code:", error)
    return {
      status: {
        id: 5,
        description: "Error",
      },
      stdout: "",
      stderr: error.message || "An unknown error occurred",
      compile_output: "",
      time: "0",
      memory: 0,
    }
  }
}

function simulateExecution(code: string, language: string, input: string, problemId: string): ExecutionResult {
  let stdout = ""
  let stderr = ""
  const compile_output = ""
  let status = { id: 3, description: "Accepted" }

  try {
    if (language === "cpp") {
      // Extract cout statements for C++
      const coutRegex = /cout\s*<<\s*([^;]+);/g
      let match
      const outputs = []

      while ((match = coutRegex.exec(code)) !== null) {
        outputs.push(match[1].trim().replace(/\s*<<\s*/g, " "))
      }

      if (outputs.length > 0) {
        stdout = outputs.join("\n")
      } else {
        stdout = "No output detected. Make sure you're using cout statements."
      }

      // Check for common errors
      if (code.includes("cin >>") && !input) {
        stderr = "Warning: Your code uses cin but no input was provided."
      }
    } else if (language === "python") {
      // Extract print statements for Python
      const printRegex = /print\s*$$([^)]+)$$/g
      let match
      const outputs = []

      while ((match = printRegex.exec(code)) !== null) {
        outputs.push(match[1].trim())
      }

      stdout = outputs.join("\n")
    } else if (language === "javascript") {
      // Extract console.log statements for JavaScript
      const consoleLogRegex = /console\.log\s*$$([^)]+)$$/g
      let match
      const outputs = []

      while ((match = consoleLogRegex.exec(code)) !== null) {
        outputs.push(match[1].trim())
      }

      stdout = outputs.join("\n")
    } else if (language === "java") {
      // Extract System.out.println statements for Java
      const printlnRegex = /System\.out\.println\s*$$([^)]+)$$/g
      let match
      const outputs = []

      while ((match = printlnRegex.exec(code)) !== null) {
        outputs.push(match[1].trim())
      }

      stdout = outputs.join("\n")
    }
  } catch (error: any) {
    status = { id: 4, description: "Runtime Error" }
    stderr = error.message || "An unknown error occurred"
  }

  return {
    status,
    stdout,
    stderr,
    compile_output,
    time: (Math.random() * 0.5).toFixed(3), // Simulated execution time in seconds
    memory: Math.floor(Math.random() * 1000) + 100, // Simulated memory usage in KB
  }
}

export function formatExecutionResult(result: ExecutionResult): string {
  let output = ""

  if (result.stdout) {
    output += `Output:\n${result.stdout}\n\n`
  }

  if (result.stderr) {
    output += `Error:\n${result.stderr}\n\n`
  }

  if (result.compile_output) {
    output += `Compilation Output:\n${result.compile_output}\n\n`
  }

  output += `Status: ${result.status.description}\n`
  output += `Execution Time: ${result.time}s\n`
  output += `Memory Used: ${result.memory} KB\n`

  // Add test case results if available
  if (result.testCaseResults && result.testCaseResults.length > 0) {
    output += "\nTest Case Results:\n"

    for (let i = 0; i < result.testCaseResults.length; i++) {
      const tc = result.testCaseResults[i]
      output += `Test Case ${i + 1}: ${tc.passed ? "✓ Passed" : "✗ Failed"}\n`
      output += `  Input: ${tc.input}\n`
      output += `  Expected Output: ${tc.expectedOutput}\n`
      output += `  Your Output: ${tc.actualOutput}\n\n`
    }

    const passedCount = result.testCaseResults.filter((tc) => tc.passed).length
    output += `${passedCount}/${result.testCaseResults.length} test cases passed.\n`
  }

  return output
}

export function isExecutionSuccessful(result: ExecutionResult): boolean {
  // Check if all test cases passed
  if (result.testCaseResults && result.testCaseResults.length > 0) {
    return result.testCaseResults.every((tc) => tc.passed)
  }

  // If no test cases, check status
  return result.status.id === 3 && !result.stderr && !result.compile_output
}
