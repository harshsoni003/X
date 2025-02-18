'use client'

import TemplatesLayout from '@/components/layout/TemplatesLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'

export default function RoutingGuide() {
  const { theme } = useTheme()

  return (
    <TemplatesLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Routing Guide
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Learn about Next.js routing system and navigation
          </p>
          <div className={`p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Key Concepts
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>File-based routing</li>
              <li>Dynamic routes</li>
              <li>Nested routes</li>
              <li>Link component</li>
              <li>Navigation hooks</li>
            </ul>
          </div>
        </div>
      </div>
    </TemplatesLayout>
  )
} 