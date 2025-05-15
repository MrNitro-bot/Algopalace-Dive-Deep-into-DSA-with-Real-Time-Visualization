"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { SubmissionFilter } from "@/components/submission-filter"
import { useToast } from "@/hooks/use-toast"

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filteredSubmissions, setFilteredSubmissions] = useState([])
  const [statusFilter, setStatusFilter] = useState("all")
  const { toast } = useToast()

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        setLoading(true)
        // Fetch submissions from the API
        const response = await fetch("/api/submissions")

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Failed to fetch submissions")
        }

        const data = await response.json()

        // Check if data is an array (successful response) or has an error property
        if (Array.isArray(data)) {
          setSubmissions(data)
          setFilteredSubmissions(data)
        } else if (data.error) {
          throw new Error(data.error)
        }
      } catch (err) {
        console.error("Error fetching submissions:", err)
        setError(err.message)
        toast({
          title: "Error",
          description: `Failed to load submissions: ${err.message}`,
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchSubmissions()
  }, [toast])

  useEffect(() => {
    if (statusFilter === "all") {
      setFilteredSubmissions(submissions)
    } else {
      setFilteredSubmissions(
        submissions.filter((submission) => {
          return submission.status === statusFilter
        }),
      )
    }
  }, [statusFilter, submissions])

  const handleFilterChange = (value) => {
    setStatusFilter(value)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-[58rem] text-center">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">All Code Submissions</h1>
          <div className="mt-8 flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">All Code Submissions</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          View all submissions, including both successful and unsuccessful attempts
        </p>
      </div>

      <div className="mx-auto max-w-5xl mt-8">
        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <p className="text-red-600">Error: {error}</p>
              <p className="mt-2 text-sm text-red-500">There was an error loading the submissions.</p>
            </CardContent>
          </Card>
        )}

        {!error && (
          <>
            <div className="flex justify-between items-center mb-4">
              <div>
                {filteredSubmissions.length > 0 && (
                  <p className="text-muted-foreground">
                    Showing {filteredSubmissions.length} of {submissions.length} submission
                    {submissions.length !== 1 ? "s" : ""}
                  </p>
                )}
              </div>
              <SubmissionFilter onFilterChange={handleFilterChange} />
            </div>

            {!filteredSubmissions || filteredSubmissions.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground">
                    {submissions.length === 0
                      ? "No submissions found in the database. Try solving some problems first!"
                      : "No submissions match the selected filter."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredSubmissions.map((submission) => {
                  const codeSubmission = submission.code_submissions

                  return (
                    <Card key={submission.id}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle>{codeSubmission?.title || `Submission #${submission.id.slice(0, 8)}`}</CardTitle>
                          <Badge
                            className={
                              submission.status === "accepted"
                                ? "bg-green-500"
                                : submission.status === "rejected"
                                  ? "bg-red-500"
                                  : "bg-yellow-500"
                            }
                          >
                            {submission.status === "accepted"
                              ? "Accepted"
                              : submission.status === "rejected"
                                ? "Rejected"
                                : "Pending"}
                          </Badge>
                        </div>
                        <CardDescription>
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <span>Submitted on {new Date(submission.created_at).toLocaleString()}</span>
                            <span>Algorithm: {codeSubmission?.algorithm_type || "Unknown"}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
                            <span>Language: {codeSubmission?.language?.toUpperCase() || "Unknown"}</span>
                            <div className="flex flex-col sm:flex-row sm:gap-4">
                              <span>Runtime: {submission.execution_time.toFixed(2)}s</span>
                              {submission.memory && <span>Memory: {submission.memory} KB</span>}
                            </div>
                          </div>

                          {submission.test_cases_total > 0 && (
                            <div className="flex items-center gap-2 text-sm">
                              <span>Test Cases:</span>
                              <div className="flex items-center">
                                {submission.test_cases_passed === submission.test_cases_total ? (
                                  <Check className="h-4 w-4 text-green-500 mr-1" />
                                ) : (
                                  <X className="h-4 w-4 text-red-500 mr-1" />
                                )}
                                <span>
                                  {submission.test_cases_passed}/{submission.test_cases_total} passed
                                </span>
                              </div>
                            </div>
                          )}

                          {codeSubmission?.code && (
                            <div className="border rounded-md p-4 bg-muted">
                              <pre className="text-xs overflow-auto max-h-40">{codeSubmission.code}</pre>
                            </div>
                          )}

                          {submission.output && (
                            <div className="mt-4">
                              <h3 className="text-sm font-medium mb-2">Output:</h3>
                              <div className="border rounded-md p-4 bg-black text-white">
                                <pre className="text-xs overflow-auto max-h-40 whitespace-pre-wrap">
                                  {submission.output}
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// Add missing Badge component
function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${className}`}>{children}</span>
}
