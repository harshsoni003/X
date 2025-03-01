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
      <header className={`fixed top-0 z-50 w-full border-b backdrop-blur-sm transition-all duration-100
        ${theme === 'dark' 
          ? 'bg-black/80 border-gray-800' 
          : 'bg-white border-gray-100'}`}
      >
        <nav className="flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
          {/* Left section */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r transition-all duration-300
                group-hover:scale-105 transform
                ${theme === 'dark' 
                  ? 'from-blue-400 to-purple-500' 
                  : 'from-blue-600 to-purple-700'}`}
              >
                InfinityUI
              </span>
            </Link>

            {/* Desktop Navigation links */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="/components">Components</NavLink>
              <div className="flex items-center space-x-1">
                <NavLink href="/templates">Templates</NavLink>
                <span className="px-1.5 py-0.5 text-xs font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full">
                  new
                </span>
              </div>
              <NavLink href="/tutorial">Tutorial</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            {/* Search - Desktop only */}
            <div className="hidden md:flex items-center">
              <div className="relative group">
                <Search className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-200
                  ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-900'}`} 
                />
                <input
                  type="text"
                  placeholder="Search Components"
                  className={`w-64 rounded-xl py-2 pl-10 pr-4 text-sm transition-all duration-200
                    ${theme === 'dark' 
                      ? 'bg-gray-900/50 border-gray-700 text-gray-300 placeholder-gray-400 focus:border-gray-600 focus:ring-gray-600 hover:bg-gray-900/70' 
                      : 'bg-gray-50/50 border-gray-200 text-gray-700 placeholder-gray-600 focus:border-gray-300 focus:ring-gray-300 hover:bg-gray-100/50'}`}
                />
                <kbd className={`absolute right-3 top-1/2 -translate-y-1/2 rounded border px-1.5 text-xs
                  ${theme === 'dark'
                    ? 'border-gray-700 bg-gray-800 text-gray-400'
                    : 'border-gray-200 bg-gray-100 text-gray-600'}`}
                >
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Social links - Desktop only */}
            <div className="hidden md:flex items-center">
              <Link 
                href="https://github.com/harshsoni003" 
                target="_blank"
                className={`text-sm font-medium transition-all duration-200 hover:scale-105 transform
                  ${theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-black'}`}
              >
                GitHub
              </Link>
            </div>

            {/* Theme toggle */}
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-xl transition-all duration-200 transform hover:scale-110
                ${theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {theme === 'dark' 
                ? <Sun className="w-5 h-5 text-yellow-500" /> 
                : <Moon className="w-5 h-5 text-gray-800" />
              }
            </button>

            {/* Sign In Button */}
            <button 
              onClick={() => setIsAuthModalOpen(true)} 
              className="px-4 py-2 rounded-xl font-medium text-white 
                bg-gradient-to-r from-blue-500 to-purple-600 
                hover:from-blue-600 hover:to-purple-700
                transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-200
                ${theme === 'dark'
                  ? 'hover:bg-gray-800 text-white'
                  : 'hover:bg-gray-200 text-black'}`}
            >
              {isMobileMenuOpen 
                ? <X className="w-6 h-6" /> 
                : <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 right-0 border-b py-4 px-6 space-y-4 backdrop-blur-sm
            ${theme === 'dark' 
              ? 'bg-black/90 border-gray-800' 
              : 'bg-white border-gray-100'}`}
          >
            <MobileNavLink href="/components" onClick={() => setIsMobileMenuOpen(false)}>
              Components
            </MobileNavLink>
            <div className="flex items-center space-x-2 py-2">
              <MobileNavLink href="/templates" onClick={() => setIsMobileMenuOpen(false)}>
                Templates
              </MobileNavLink>
              <span className="px-1.5 py-0.5 text-xs font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full">
                new
              </span>
            </div>
            <MobileNavLink href="/tutorial" onClick={() => setIsMobileMenuOpen(false)}>
              Tutorial
            </MobileNavLink>
            <MobileNavLink href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </MobileNavLink>
            <MobileNavLink href="https://github.com/harshsoni003" onClick={() => setIsMobileMenuOpen(false)}>
              GitHub
            </MobileNavLink>
            
            {/* Mobile Search */}
            <div className="relative py-2">
              <Search className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2
                ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
              <input
                type="text"
                placeholder="Search Components"
                className={`w-full rounded-xl py-2 pl-10 pr-4 text-sm transition-all duration-200
                  ${theme === 'dark' 
                    ? 'bg-gray-900/50 border-gray-700 text-gray-300 placeholder-gray-400 focus:border-gray-600 focus:ring-gray-600' 
                    : 'bg-gray-50/50 border-gray-200 text-gray-700 placeholder-gray-600 focus:border-gray-300 focus:ring-gray-300'}`}
              />
            </div>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  )
}

// Helper Components
interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  const { theme } = useTheme()
  return (
    <Link 
      href={href}
      className={`text-sm font-medium transition-all duration-200 hover:scale-105 transform
        ${theme === 'dark' 
          ? 'text-gray-300 hover:text-white' 
          : 'text-gray-700 hover:text-black'}`}
    >
      {children}
    </Link>
  )
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void
}

function MobileNavLink({ href, onClick, children }: MobileNavLinkProps) {
  const { theme } = useTheme()
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`block text-sm font-medium transition-colors py-2
        ${theme === 'dark' 
          ? 'text-gray-300 hover:text-white' 
          : 'text-gray-700 hover:text-black'}`}
    >
      {children}
    </Link>
  )
}