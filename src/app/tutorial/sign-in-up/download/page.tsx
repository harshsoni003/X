'use client'

import TutorialLayout from '@/components/layout/TutorialLayout'
import { useTheme } from '@/context/ThemeContext'
import { Download } from 'lucide-react'

export default function DownloadTemplate() {
  const { theme } = useTheme()

  return (
    <TutorialLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Download Authentication Template
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Get started with our pre-built authentication template
          </p>

          <div className={`p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <div className="text-center">
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download Template
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Includes: Sign In, Sign Up, Password Reset, and Email Verification
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className={`mt-8 p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Template Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Next.js 13+ with App Router</li>
              <li>TypeScript Support</li>
              <li>Tailwind CSS Styling</li>
              <li>Dark Mode Support</li>
              <li>Responsive Design</li>
              <li>Form Validation</li>
              <li>Error Handling</li>
            </ul>
          </div>
        </div>
      </div>
    </TutorialLayout>
  )
} 