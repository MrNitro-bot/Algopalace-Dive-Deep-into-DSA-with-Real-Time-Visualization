"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"
import type { ReactNode } from "react"

interface UserProfile {
  id: string
  username: string
  full_name: string | null
  bio: string | null
  avatar_url: string | null
  experience_level: string | null
}

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any | null }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// In-memory storage for demo purposes when Supabase is not configured
const demoUsers: Array<{ email: string; password: string; fullName: string; id: string }> = []
let currentDemoUser: { email: string; fullName: string; id: string } | null = null

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      // Demo mode - check for demo user
      if (currentDemoUser) {
        setUser({
          id: currentDemoUser.id,
          email: currentDemoUser.email,
          user_metadata: { full_name: currentDemoUser.fullName },
        } as User)
        setProfile({
          id: currentDemoUser.id,
          username: currentDemoUser.email.split("@")[0],
          full_name: currentDemoUser.fullName,
          bio: null,
          avatar_url: null,
          experience_level: "beginner",
        })
      }
      setIsLoading(false)
      return
    }

    // Check active session
    const getSession = async () => {
      setIsLoading(true)
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (session?.user) {
          setUser(session.user)
          await fetchOrCreateProfile(
            session.user.id,
            session.user.email || "",
            session.user.user_metadata?.full_name || "",
          )
        }
      } catch (error) {
        console.error("Error getting session:", error)
      }
      setIsLoading(false)
    }

    getSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser(session.user)
        await fetchOrCreateProfile(
          session.user.id,
          session.user.email || "",
          session.user.user_metadata?.full_name || "",
        )
      } else {
        setUser(null)
        setProfile(null)
      }
      setIsLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  async function fetchOrCreateProfile(userId: string, email: string, fullName: string) {
    if (!isSupabaseConfigured()) return

    try {
      // First, try to fetch existing profile
      const { data: existingProfile, error: fetchError } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", userId)
        .single()

      if (existingProfile) {
        setProfile(existingProfile as UserProfile)
        return existingProfile
      }

      // If profile doesn't exist, create one
      if (fetchError && fetchError.code === "PGRST116") {
        const newProfile = {
          id: userId,
          username: email.split("@")[0],
          full_name: fullName || null,
          bio: null,
          avatar_url: null,
          experience_level: "beginner",
        }

        console.log("Creating new profile:", newProfile)

        // Use insert for new profiles
        const { data, error } = await supabase.from("user_profiles").insert([newProfile]).select().single()

        if (error) {
          console.error("Error creating profile:", error)
          return null
        }

        console.log("Profile created successfully:", data)
        setProfile(data as UserProfile)
        return data
      }

      console.error("Error fetching profile:", fetchError)
      return null
    } catch (error) {
      console.error("Error in fetchOrCreateProfile:", error)
      return null
    }
  }

  async function signIn(email: string, password: string) {
    if (!isSupabaseConfigured()) {
      // Demo mode
      const demoUser = demoUsers.find((u) => u.email === email && u.password === password)
      if (demoUser) {
        currentDemoUser = { email: demoUser.email, fullName: demoUser.fullName, id: demoUser.id }
        setUser({
          id: demoUser.id,
          email: demoUser.email,
          user_metadata: { full_name: demoUser.fullName },
        } as User)
        setProfile({
          id: demoUser.id,
          username: demoUser.email.split("@")[0],
          full_name: demoUser.fullName,
          bio: null,
          avatar_url: null,
          experience_level: "beginner",
        })
        return { error: null }
      } else {
        return { error: { message: "Invalid login credentials" } }
      }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  async function signUp(email: string, password: string, fullName: string) {
    if (!isSupabaseConfigured()) {
      // Demo mode
      const existingUser = demoUsers.find((u) => u.email === email)
      if (existingUser) {
        return { error: { message: "User already exists" } }
      }

      const newUser = {
        email,
        password,
        fullName,
        id: Math.random().toString(36).substr(2, 9),
      }
      demoUsers.push(newUser)

      // Auto login
      currentDemoUser = { email: newUser.email, fullName: newUser.fullName, id: newUser.id }
      setUser({
        id: newUser.id,
        email: newUser.email,
        user_metadata: { full_name: newUser.fullName },
      } as User)
      setProfile({
        id: newUser.id,
        username: newUser.email.split("@")[0],
        full_name: newUser.fullName,
        bio: null,
        avatar_url: null,
        experience_level: "beginner",
      })

      return { error: null }
    }

    try {
      console.log("Starting signup process for:", email)

      // Sign up the user with email confirmation disabled
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
          emailRedirectTo: undefined, // Skip email confirmation
        },
      })

      if (error) {
        console.error("Signup error:", error)
        return { error }
      }

      console.log("Signup successful:", data)

      // Check if user was created and confirmed immediately
      if (data.user && data.user.email_confirmed_at) {
        console.log("User confirmed immediately, creating profile...")
        // User is confirmed, create profile immediately
        await fetchOrCreateProfile(data.user.id, email, fullName)
        return { error: null }
      }

      // If user exists but not confirmed, try to sign in anyway
      if (data.user) {
        console.log("Attempting to sign in after signup...")
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (!signInError && signInData.user) {
          console.log("Sign in successful after signup")
          return { error: null }
        }

        // If sign in fails, still consider signup successful
        console.log("Sign in failed but signup was successful")
        return { error: null }
      }

      return { error: null }
    } catch (error: any) {
      console.error("Signup catch error:", error)
      return { error }
    }
  }

  async function signOut() {
    if (!isSupabaseConfigured()) {
      // Demo mode
      currentDemoUser = null
      setUser(null)
      setProfile(null)
      return
    }

    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  const value = {
    user,
    profile,
    isLoading,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
