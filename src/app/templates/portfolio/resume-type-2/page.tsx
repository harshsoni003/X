'use client'

import TemplatesLayout from '@/components/layout/TemplatesLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'

export default function ResumeType2() {
  const { theme } = useTheme()

  return (
    <TemplatesLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Resume Type 2 Template
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A modern and creative resume template for professionals
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
            <Image
              src="https://picsum.photos/1200/400"
              alt="Resume Template"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className={`text-left p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Resume Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Creative design layout</li>
              <li>Skills progress bars</li>
              <li>Work experience timeline</li>
              <li>Education section</li>
              <li>Projects showcase</li>
            </ul>
          </div>
        </div>
      </div>
    </TemplatesLayout>
  )
} 