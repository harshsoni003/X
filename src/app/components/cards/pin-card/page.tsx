'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import { AnimatedPinDemo } from './pin-card-css/pin'
import PinCardCode from './pin-card-code/page'
import { useState } from 'react'

export default function PinCardComponent() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  return (
    <ComponentsLayout>
      <div className="space-y-6 sm:space-y-8 px-3 sm:px-6 md:px-8 max-w-full">
        <div>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Pin Card Component
          </h1>
          <p className={`text-base sm:text-lg mb-4 sm:mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A 3D pin card with hover effects and animations.
          </p>

          {/* Tabs */}
          <div className="border-b mb-4 sm:mb-6">
            <div className="flex space-x-4 sm:space-x-6">
              <button
                onClick={() => setActiveTab('preview')}
                className={`pb-2 px-1 sm:px-2 transition-colors relative text-sm sm:text-base
                  ${activeTab === 'preview' 
                    ? theme === 'dark' ? 'text-white' : 'text-black' 
                    : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Preview
                {activeTab === 'preview' && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5
                    ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
                )}
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`pb-2 px-1 sm:px-2 transition-colors relative text-sm sm:text-base
                  ${activeTab === 'code' 
                    ? theme === 'dark' ? 'text-white' : 'text-black' 
                    : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Code
                {activeTab === 'code' && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5
                    ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'preview' ? (
            <div className={`p-3 sm:p-4 md:p-6 rounded-lg border transition-colors
              ${theme === 'dark' 
                ? 'bg-gray-500 border-gray-800 text-gray-300' 
                : 'bg-white border-gray-200 text-gray-700'}`}>    
              <div className="flex justify-center">
                <div className="transform scale-90 sm:scale-100">
                  <AnimatedPinDemo />
                </div>
              </div>
            </div>
          ) : (
            <div className={`p-3 sm:p-4 md:p-6 rounded-lg border transition-colors overflow-x-auto
              ${theme === 'dark' 
                ? 'bg-gray-500 border-gray-800 text-gray-300' 
                : 'bg-white border-gray-200 text-gray-700'}`}>
              <PinCardCode />
            </div>
          )}
        </div>
      </div>
    </ComponentsLayout>
  )
} 