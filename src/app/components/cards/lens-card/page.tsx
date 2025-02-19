'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import { Lens } from '@/app/components/cards/lens-card/lens-card-css/lens'
import { Button } from '@/components/ui/button'
import { LensCardCode } from './lens-card-code/page'
import { useState } from 'react'
import Image from 'next/image'

export default function LensCardComponent() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  return (
    <ComponentsLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Lens Card Component
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A magnifying lens effect for images.
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

          {/* Content first container*/}
          {activeTab === 'preview' ? (
            <div className={`p-6 rounded-lg border transition-colors
              ${theme === 'dark' 
                ? 'bg-gray-500 border-gray-800 text-gray-300' 
                : 'bg-white border-gray-200 text-gray-700'}`}>    
              <div className="max-w-md mx-auto">
                <div className={`rounded-lg overflow-hidden border transition-colors
                  ${theme === 'dark' ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
                  <div className="p-4">
                    <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
                      <img
                        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
                        alt="Elegant diamond necklace"
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </Lens>
                  </div>
                  <div className="p-4">
                    <h3 className={`text-xl font-semibold mb-2
                      ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Diamond Necklace
                    </h3>
                    <p className={`mb-4 text-sm
                      ${theme === 'dark' ? 'text-stone-400' : 'text-gray-600'}`}>
                      Examine the intricate details and craftsmanship of this stunning diamond necklace with our magnifying lens.
                    </p>
                    <div className="flex space-x-4">
                      <Button>Book Now</Button>
                      <Button variant="secondary">Add to Cart</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`p-6 rounded-lg border transition-colors
              ${theme === 'dark' 
                ? 'bg-gray-500 border-gray-800 text-gray-300'  //code secon container
                : 'bg-white border-gray-200 text-gray-700'}`}>
              <LensCardCode />
            </div>
          )}
        </div>
      </div>
    </ComponentsLayout>
  )
} 