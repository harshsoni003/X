'use client'

import Link from 'next/link'
import { Moon, Sun, Search, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'
import AuthModal from '../auth/AuthModal'

export default function Navbar() {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full border-b transition-colors duration-200
        ${theme === 'dark' 
          ? 'bg-black border-gray-800' 
          : 'bg-white border-gray-200'}`}>
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Left section */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className={`text-xl font-semibold
                ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                InfinityX
              </span>
            </Link>

            {/* Desktop Navigation links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/components" className={`text-sm transition-colors
                ${theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-black'}`}>
                Components
              </Link>
              <div className="flex items-center space-x-1">
                <Link href="/templates" className={`text-sm transition-colors
                  ${theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-black'}`}>
                  Templates
                </Link>
                <span className="px-1.5 py-0.5 text-xs font-medium text-white bg-emerald-600 rounded-full">
                  new
                </span>
              </div>
              <Link href="/tutorial" className={`text-sm transition-colors
                ${theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-black'}`}>
                Tutorial
              </Link>
              <Link href="/pricing" className={`text-sm transition-colors
                ${theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-black'}`}>
                Pricing
              </Link>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            {/* Search - Desktop only */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                <input
                  type="text"
                  placeholder="Search Components"
                  className={`w-64 rounded-lg py-1.5 pl-10 pr-4 text-sm transition-colors
                    ${theme === 'dark' 
                      ? 'border-gray-700 bg-gray-900 text-gray-300 placeholder-gray-400 focus:border-gray-600 focus:ring-gray-600' 
                      : 'border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-600 focus:border-gray-300 focus:ring-gray-300'}`}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <kbd className="rounded border dark:border-gray-700 border-gray-200 dark:bg-gray-800 bg-gray-100 px-1.5 text-xs dark:text-gray-400 text-gray-600">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>

            {/* Social links - Desktop only */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="https://github.com/harshsoni003" target="_blank" className={`transition-colors
                ${theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-black'}`}>
                GitHub
              </Link>
            </div>

            {/* Theme toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-800" />}
            </button>

            {/* Sign In Button */}
            <button onClick={() => setIsAuthModalOpen(true)} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:scale-105 transition-transform duration-300">
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isMobileMenuOpen ? 
                <X className="w-6 h-6 dark:text-white text-black" /> : 
                <Menu className="w-6 h-6 dark:text-white text-black" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 right-0 border-b py-4 px-6 space-y-4 transition-colors duration-200
            ${theme === 'dark' 
              ? 'bg-black border-gray-800' 
              : 'bg-white border-gray-200'}`}>
            <Link href="/components" 
              className={`block text-sm transition-colors
                ${theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-black'} py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Components
            </Link>
            <div className="flex items-center space-x-2 py-2">
              <Link href="/templates" 
                className={`text-sm transition-colors
                  ${theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-black'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Templates
              </Link>
              <span className="px-1.5 py-0.5 text-xs font-medium text-white bg-emerald-600 rounded-full">
                new
              </span>
            </div>
            <Link href="/tutorial" 
              className={`block text-sm transition-colors
                ${theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-black'} py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tutorial
            </Link>
            <Link href="/pricing" 
              className={`block text-sm transition-colors
                ${theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-black'} py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link href="https://github.com/harshsoni003" 
              target="_blank"
              className={`block text-sm transition-colors
                ${theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-black'} py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub
            </Link>
            
            {/* Mobile Search */}
            <div className="relative py-2">
              <Search className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2
                ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
              <input
                type="text"
                placeholder="Search Components"
                className={`w-full rounded-lg py-1.5 pl-10 pr-4 text-sm transition-colors
                  ${theme === 'dark' 
                    ? 'border-gray-700 bg-gray-900 text-gray-300 placeholder-gray-400 focus:border-gray-600 focus:ring-gray-600' 
                    : 'border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-600 focus:border-gray-300 focus:ring-gray-300'}`}
              />
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  )
} 