'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'

const Components = () => {
  const { theme } = useTheme()

  return (
    <ComponentsLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Updating SOON!
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Updating soon all components!
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1590479773265-7464e5d48118"
              alt="Updating Soon"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </ComponentsLayout>
  )
}

export default Components 