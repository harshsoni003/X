'use client'

import TutorialLayout from '@/components/layout/TutorialLayout'
import { useTheme } from '@/context/ThemeContext'
import { Play, Lock } from 'lucide-react'
import Image from 'next/image'

export default function ViewTutorial() {
  const { theme } = useTheme()

  const tutorials = [
    {
      title: 'Setting up Authentication',
      duration: '15:30',
      image: 'https://picsum.photos/400/200',
    },
    {
      title: 'Implementing Sign In',
      duration: '12:45',
      image: 'https://picsum.photos/400/201',
    },
    {
      title: 'Creating Sign Up Flow',
      duration: '18:20',
      image: 'https://picsum.photos/400/202',
    },
  ]

  return (
    <TutorialLayout>
      <div className="space-y-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <h1 className={`text-4xl font-bold transition-colors
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Authentication Tutorial Videos
            </h1>
            <Lock className="w-6 h-6 text-yellow-500" />
          </div>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Premium content: Step-by-step video guides for authentication implementation
          </p>

          <div className="space-y-6">
            {tutorials.map((tutorial, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg border transition-colors
                  ${theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800' 
                    : 'bg-white border-gray-200'}`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-64 h-36 rounded-lg overflow-hidden">
                    <Image
                      src={tutorial.image}
                      alt={tutorial.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-xl font-semibold mb-2
                      ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {tutorial.title}
                    </h2>
                    <p className={`text-sm mb-4
                      ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Duration: {tutorial.duration}
                    </p>
                    <button 
                      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      onClick={() => alert('Premium content - Please subscribe to access')}
                    >
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Features */}
          <div className={`mt-8 p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Premium Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>HD Video Quality</li>
              <li>Downloadable Source Code</li>
              <li>Written Documentation</li>
              <li>Direct Support</li>
              <li>Certificate of Completion</li>
            </ul>
          </div>
        </div>
      </div>
    </TutorialLayout>
  )
} 