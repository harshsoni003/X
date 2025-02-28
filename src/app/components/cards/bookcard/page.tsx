'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import { Grid } from './bookcard-card-css/grid'
import { Button } from '@/components/ui/button'
import GridCardCode from './bookcard-card-code/page'
import { useState } from 'react'

export default function GridComponent() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  return (
    <ComponentsLayout>
      <div className="space-y-8 px-4 sm:px-6 md:px-8">
        <div>
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Grid Component
          </h1>
          <p className={`text-lg sm:text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Flexible grid system for creating complex layouts
          </p>

          {/* Tabs */}
          <div className="border-b mb-6">
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab('preview')}
                className={`pb-2 px-2 transition-colors relative
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
                className={`pb-2 px-2 transition-colors relative
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
            <div className={`p-4 sm:p-6 rounded-lg border transition-colors
              ${theme === 'dark' 
                ? 'bg-gray-500 border-gray-800 text-gray-300' 
                : 'bg-white border-gray-200 text-gray-700'}`}>    
              <div className="max-w-md mx-auto">
                <Grid />
              </div>
            </div>
          ) : (
            <div className={`p-4 sm:p-6 rounded-lg border transition-colors
              ${theme === 'dark' 
                ? 'bg-gray-500 border-gray-800 text-gray-300' 
                : 'bg-white border-gray-200 text-gray-700'}`}>
              <GridCardCode />
            </div>
          )}
        </div>
      </div>
    </ComponentsLayout>
  )
} 