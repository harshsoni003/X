'use client'

import TemplatesLayout from '@/components/layout/TemplatesLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'

export default function Templates() {
  const { theme } = useTheme()

  return (
    <TemplatesLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Updating soon all templates!
            
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Updating soon all templates!
            
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
            <Image
              src="https://picsum.photos/1200/400"
              alt="Templates Header"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </TemplatesLayout>
  )
} 