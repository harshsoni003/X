'use client'

import TemplatesLayout from '@/components/layout/TemplatesLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'

export default function ProfessionalPortfolio() {
  const { theme } = useTheme()

  return (
    <TemplatesLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Professional Portfolio Template
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A clean and modern professional portfolio template
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
            <Image
              src="https://picsum.photos/1200/400"
              alt="Professional Portfolio Template"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Add your professional portfolio template content here */}
          <div className={`text-left p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Template Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Responsive design</li>
              <li>Modern layout</li>
              <li>Portfolio sections</li>
              <li>Contact form</li>
              <li>Skills showcase</li>
            </ul>
          </div>
        </div>
      </div>
    </TemplatesLayout>
  )
} 