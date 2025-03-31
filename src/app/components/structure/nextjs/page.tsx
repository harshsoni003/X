'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import { Download } from 'lucide-react'
import type { JSX } from 'react'

export default function NextjsSetup(): JSX.Element {
  const { theme } = useTheme()

  return (
    <ComponentsLayout>
      <div className="space-y-6 sm:space-y-8 px-3 sm:px-6 md:px-8 max-w-full">
        <div>
          <h1 className={`text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Next.js Setup Guide
          </h1>
          <p className={`text-base sm:text-lg mb-4 sm:mb-6
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Follow these steps to set up a new Next.js project with InfinityUI
          </p>
        </div>

        {/* Download Section */}
        <div className={`p-4 sm:p-6 rounded-xl border
          ${theme === 'dark' ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 sm:mb-4">
            <h2 className={`text-lg sm:text-xl font-semibold
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Download Starter Template
            </h2>
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors w-full sm:w-auto">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Get started quickly with our pre-configured Next.js template
          </p>
        </div>

        {/* Setup Steps */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className={`text-xl sm:text-2xl font-semibold mb-2 sm:mb-4
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Manual Setup
          </h2>

          <div className={`p-4 sm:p-6 rounded-xl border
            ${theme === 'dark' ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'}`}>
            <h3 className={`text-base sm:text-lg font-medium mb-2 sm:mb-3
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              1. Create a new Next.js project
            </h3>
            <div className={`p-3 sm:p-4 rounded-lg overflow-x-auto text-sm
              ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <code className="whitespace-pre-wrap break-words">npx create-next-app@latest my-app --typescript --tailwind --app</code>
            </div>
          </div>

          <div className={`p-4 sm:p-6 rounded-xl border
            ${theme === 'dark' ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'}`}>
            <h3 className={`text-base sm:text-lg font-medium mb-2 sm:mb-3
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              2. Install dependencies
            </h3>
            <div className={`p-3 sm:p-4 rounded-lg overflow-x-auto text-sm
              ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <code className="whitespace-pre-wrap break-words">npm install @infinityui/react framer-motion</code>
            </div>
          </div>

          <div className={`p-4 sm:p-6 rounded-xl border
            ${theme === 'dark' ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'}`}>
            <h3 className={`text-base sm:text-lg font-medium mb-2 sm:mb-3
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              3. Configure app directory
            </h3>
            <div className={`p-3 sm:p-4 rounded-lg overflow-x-auto text-sm
              ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <code className="whitespace-pre-wrap break-words">mkdir app/(routes) && touch app/layout.tsx app/page.tsx</code>
            </div>
          </div>
        </div>
      </div>
    </ComponentsLayout>
  )
} 