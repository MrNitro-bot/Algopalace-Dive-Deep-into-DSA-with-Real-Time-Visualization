import { createClient } from "@supabase/supabase-js"

// Get environment variables with fallbacks for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key"

// Check if we have valid Supabase configuration
const hasValidConfig = supabaseUrl !== "https://placeholder.supabase.co" && supabaseAnonKey !== "placeholder-key"

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

// Helper function to check if Supabase is properly configured
export function isSupabaseConfigured() {
  return hasValidConfig
}

// Helper function to get the current user
export async function getCurrentUser() {
  if (!hasValidConfig) {
    return null
  }

  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session?.user
}
