'use client'

import React from "react"
import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { Stack } from "./popupcard-card-css/stack"
import StackCardCode from "./popupcardcard-code/page"
import { useTheme } from '@/context/ThemeContext'
import { useState } from "react"

export default function StackComponent() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  return (
    <ComponentsLayout>
      <div className="space-y-8 px-4 sm:px-6 md:px-8">
        <div>
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-300
            hover:cursor-pointer
            hover:text-shadow-[0_0_1rem_#ffc414]
            dark:hover:text-shadow-[0_0_1rem_#1ca0fb]
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Popup Card
          </h1>
          <p className={`text-lg sm:text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A beautiful card component with animated gradient background
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
                ? 'bg-black border-gray-800 text-white' 
                : 'bg-white border-gray-200 text-gray-700'}`}>
              <div className="flex justify-center">
                <Stack />
              </div>
            </div>
          ) : (
            <div className={`p-4 sm:p-6 rounded-lg border transition-colors
              ${theme === 'dark' 
                ? 'bg-black border-gray-800 text-white' 
                : 'bg-white border-gray-200 text-gray-700'}`}>
              <StackCardCode />
            </div>
          )}
        </div>
      </div>
    </ComponentsLayout>
  )
} 