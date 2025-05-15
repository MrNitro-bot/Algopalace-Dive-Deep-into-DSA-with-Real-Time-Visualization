interface CodeRunnerOptions {
  code: string
  language: string
  problemId: string
  input?: string
}

interface CodeRunnerResult {
  status: string
  output: string
  executionTime?: number
  memory?: number
}

// Helper function to extract cout output from C++ code
function extractCoutOutput(code: string): string {
  const coutRegex = /cout\s*<<\s*([^;]+);/g
  let match
  const outputs = []

  while ((match = coutRegex.exec(code)) !== null) {
    outputs.push(match[1].trim())
  }

  return outputs.join("\n")
}

// Helper function to simulate code execution
function simulateCodeExecution(code: string, language: string, input?: string): CodeRunnerResult {
  let output = ""
  let status = "success"

  try {
    if (language === "cpp") {
      // Extract cout statements for C++
      const coutOutput = extractCoutOutput(code)
      output = `Simulated C++ Output:\n${coutOutput}\n\nInput: ${input || "None"}`
    } else if (language === "python") {
      // Extract print statements for Python
      const printRegex = /print\s*$$([^)]+)$$/g
      let match
      const outputs = []

      while ((match = printRegex.exec(code)) !== null) {
        outputs.push(match[1].trim())
      }

      output = `Simulated Python Output:\n${outputs.join("\n")}\n\nInput: ${input || "None"}`
    } else {
      output = `Simulated ${language.toUpperCase()} Output:\nExecution successful\n\nInput: ${input || "None"}`
    }
  } catch (error) {
    status = "error"
    output = `Error: ${error}`
  }

  return {
    status,
    output,
    executionTime: Math.random() * 100, // Simulated execution time
    memory: Math.floor(Math.random() * 10) + 1, // Simulated memory usage
  }
}

// Main function to run code
export async function runCode({ code, language, problemId, input }: CodeRunnerOptions): Promise<CodeRunnerResult> {
  try {
    // For real execution, you would call an external API here
    // For now, we'll simulate the execution
    const result = simulateCodeExecution(code, language, input)

    // Add expected output based on the problem ID
    result.output += `\n\nExpected Output: Sample output for problem ${problemId}`

    return result
  } catch (error: any) {
    console.error("Error running code:", error)
    return {
      status: "error",
      output: `Error: ${error.message || "An unknown error occurred"}`,
    }
  }
}
