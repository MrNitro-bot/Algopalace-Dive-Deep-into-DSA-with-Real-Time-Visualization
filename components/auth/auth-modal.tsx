"use client"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { LoginForm } from "@/components/auth/login-form"
import { SignUpForm } from "@/components/auth/signup-form"

type AuthMode = "login" | "signup"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: AuthMode
}

export function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode)

  const handleSuccess = () => {
    onClose()
  }

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login")
  }

  return (
    <Modal
      title={mode === "login" ? "Log in to your account" : "Create an account"}
      description={
        mode === "login"
          ? "Enter your credentials to access your account"
          : "Fill in the details below to create your account"
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      {mode === "login" ? (
        <LoginForm onSuccess={handleSuccess} onSignUpClick={toggleMode} />
      ) : (
        <SignUpForm onSuccess={handleSuccess} onLoginClick={toggleMode} />
      )}
    </Modal>
  )
}
