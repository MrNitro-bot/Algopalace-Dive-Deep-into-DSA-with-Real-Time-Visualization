import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    // Fetch all submissions from the submission_results table
    // Join with code_submissions to get additional details
    const { data: submissions, error } = await supabase
      .from("submission_results")
      .select(`
        *,
        code_submissions (
          id,
          title,
          code,
          language,
          algorithm_type,
          user_id,
          created_at
        )
      `)
      .order("created_at", { ascending: false })
      .limit(100)

    if (error) {
      console.error("Error fetching submissions:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(submissions || [])
  } catch (error) {
    console.error("Error in submissions API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
