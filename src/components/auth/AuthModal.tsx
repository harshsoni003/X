'use client'

import { useState, useEffect } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import { X } from 'lucide-react'

type AuthView = 'signin' | 'signup' | 'forgot-password'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [view, setView] = useState<AuthView>('signin')
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Blur Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
        <div className="bg-black rounded-2xl shadow-xl relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>

          {view === 'signin' && (
            <SignIn 
              onSignUp={() => setView('signup')}
              onForgotPassword={() => setView('forgot-password')}
            />
          )}
          {view === 'signup' && (
            <SignUp
              onSignIn={() => setView('signin')}
            />
          )}
          {view === 'forgot-password' && (
            <ForgotPassword
              onBackToSignIn={() => setView('signin')}
            />
          )}
        </div>
      </div>
    </div>
  )
} 