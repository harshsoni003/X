'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'
import Image from 'next/image'

const Components = () => {
  const { theme } = useTheme()

  return (
    <ComponentsLayout>
      <div className="space-y-12">
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-6 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Components Gallery
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Explore our collection of beautiful and reusable components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cards Section */}
          <Link href="/components/cards" 
            className={`p-6 rounded-lg transition-all hover:scale-105 relative overflow-hidden
              ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} 
              shadow-lg`}>
            <div className="relative z-10">
              <h2 className={`text-2xl font-semibold mb-3
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Cards
              </h2>
              <p className={`mb-4
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Discover various card designs including book cards, popup cards, and more
              </p>
            </div>
            <div className="absolute right-4 bottom-4 w-24 h-24 opacity-20">
              <Image
                src="https://api.iconify.design/material-symbols:cards-outline.svg"
                alt="Cards Icon"
                width={96}
                height={96}
                className={`object-contain ${theme === 'dark' ? 'invert' : ''}`}
              />
            </div>
          </Link>

          {/* Buttons Section */}
          <Link href="/components/buttons"
            className={`p-6 rounded-lg transition-all hover:scale-105 relative overflow-hidden
              ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} 
              shadow-lg`}>
            <div className="relative z-10">
              <h2 className={`text-2xl font-semibold mb-3
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Buttons
              </h2>
              <p className={`mb-4
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Explore interactive buttons with effects like pulse, shine, and more
              </p>
            </div>
            <div className="absolute right-4 bottom-4 w-24 h-24 opacity-20">
              <Image
                src="https://api.iconify.design/material-symbols:smart-button.svg"
                alt="Buttons Icon"
                width={96}
                height={96}
                className={`object-contain ${theme === 'dark' ? 'invert' : ''}`}
              />
            </div>
          </Link>
        </div>
      </div>
    </ComponentsLayout>
  )
}

export default Components 