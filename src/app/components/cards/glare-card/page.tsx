'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import { GlareCard } from './glare-card-css/glare'
import { Button } from '@/components/ui/button'
import GlareCardCode from './glare-card-code/page'
import { useState } from 'react'

export default function GlareCardComponent() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  return (
    <ComponentsLayout>
      <div className="space-y-8 px-4 sm:px-6 md:px-8">
        <div>
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Glare Card Component
          </h1>
          <p className={`text-lg sm:text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            An interactive card with holographic glare effects.
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 justify-items-center max-w-[750px] mx-auto">
                <GlareCard className="flex flex-col items-center justify-center">
                  <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074&auto=format&fit=crop"
                    alt="Night sky with stars"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-bold text-white text-sm">Starry Night</p>
                    <p className="font-normal text-xs text-neutral-200 mt-1">Celestial beauty</p>
                  </div>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                  <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop"
                    alt="Sunset through trees"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-bold text-white text-sm">Dark Forest</p>
                    <p className="font-normal text-xs text-neutral-200 mt-1">Mystical twilight</p>
                  </div>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                  <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1974&auto=format&fit=crop"
                    alt="Northern lights"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-bold text-white text-sm">Aurora Night</p>
                    <p className="font-normal text-xs text-neutral-200 mt-1">Nature's light show</p>
                  </div>
                </GlareCard>
              </div>
            </div>
          ) : (
            <div className={`p-4 sm:p-6 rounded-lg border transition-colors
              ${theme === 'dark' 
                ? 'bg-gray-500 border-gray-800 text-gray-300' 
                : 'bg-white border-gray-200 text-gray-700'}`}>
              <GlareCardCode />
            </div>
          )}
        </div>
      </div>
    </ComponentsLayout>
  )
} 