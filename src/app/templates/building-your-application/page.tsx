'use client'

import TemplatesLayout from '@/components/layout/TemplatesLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function BuildingYourApplication() {
  const { theme } = useTheme()

  const topics = [
    {
      title: 'Routing',
      description: 'Learn about Next.js file-system based routing and navigation',
      href: '/templates/building-your-application/routing',
      image: 'https://picsum.photos/400/200',
    },
    {
      title: 'Data Fetching',
      description: 'Explore different data fetching strategies in Next.js',
      href: '/templates/building-your-application/data-fetching',
      image: 'https://picsum.photos/400/201',
    },
    {
      title: 'Styling',
      description: 'Discover various styling approaches available in Next.js',
      href: '/templates/building-your-application/styling',
      image: 'https://picsum.photos/400/202',
    },
  ]

  return (
    <TemplatesLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Building Your Application
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Learn how to build robust applications with Next.js
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <Link 
                key={topic.href}
                href={topic.href}
                className={`group block p-6 rounded-lg border transition-all duration-200 hover:scale-[1.02]
                  ${theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700' 
                    : 'bg-white border-gray-200 hover:border-gray-300'}`}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className={`text-xl font-semibold mb-2 transition-colors
                      ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {topic.title}
                    </h2>
                    <p className={`transition-colors
                      ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {topic.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-colors
                    ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}
                    group-hover:text-blue-500`}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className={`mt-8 p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>File-system Based Routing</li>
              <li>Server-side Rendering</li>
              <li>Static Site Generation</li>
              <li>API Routes</li>
              <li>Built-in CSS Support</li>
              <li>Code Splitting and Bundling</li>
              <li>TypeScript Support</li>
              <li>Fast Refresh</li>
            </ul>
          </div>
        </div>
      </div>
    </TemplatesLayout>
  )
} 