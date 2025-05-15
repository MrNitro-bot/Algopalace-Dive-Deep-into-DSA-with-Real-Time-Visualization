// This is a simple in-memory database for demonstration
// In a real application, you would use a proper database like MongoDB, PostgreSQL, etc.

interface Submission {
  id: string
  userId: string
  problemId: string
  code: string
  language: string
  status: "accepted" | "wrong_answer" | "time_limit_exceeded" | "runtime_error"
  executionTime?: number
  memory?: number
  timestamp: Date
}

class SubmissionDatabase {
  private submissions: Submission[] = []

  async addSubmission(submission: Omit<Submission, "id" | "timestamp">): Promise<Submission> {
    const newSubmission: Submission = {
      ...submission,
      id: Math.random().toString(36).substring(2, 15),
      timestamp: new Date(),
    }

    this.submissions.push(newSubmission)
    return newSubmission
  }

  async getSubmissionsByUser(userId: string): Promise<Submission[]> {
    return this.submissions.filter((sub) => sub.userId === userId)
  }

  async getSubmissionsByProblem(problemId: string): Promise<Submission[]> {
    return this.submissions.filter((sub) => sub.problemId === problemId)
  }

  async getSubmission(id: string): Promise<Submission | undefined> {
    return this.submissions.find((sub) => sub.id === id)
  }
}

// Export a singleton instance
export const submissionDB = new SubmissionDatabase()
