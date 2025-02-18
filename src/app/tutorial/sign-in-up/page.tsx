'use client'

import TutorialLayout from '@/components/layout/TutorialLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function SignInUpTutorial() {
  const { theme } = useTheme()

  const sections = [
    {
      title: 'Download Template',
      description: 'Get started with our authentication template',
      href: '/tutorial/sign-in-up/download',
      image: 'https://picsum.photos/400/200',
    },
    {
      title: 'View Tutorial',
      description: 'Learn how to implement authentication',
      href: '/tutorial/sign-in-up/view',
      image: 'https://picsum.photos/400/201',
      locked: true,
    },
    {
      title: 'Schedule Meeting',
      description: 'Book a 1-on-1 session for personalized help',
      href: '/tutorial/sign-in-up/schedule',
      image: 'https://picsum.photos/400/202',
      locked: true,
    },
  ]

  return (
    <TutorialLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Authentication Tutorial
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Learn how to implement secure authentication in your application
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <Link 
                key={section.href}
                href={section.href}
                className={`group block p-6 rounded-lg border transition-all duration-200 hover:scale-[1.02]
                  ${theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700' 
                    : 'bg-white border-gray-200 hover:border-gray-300'}`}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                  {section.locked && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                        Premium Content
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className={`text-xl font-semibold mb-2 transition-colors
                      ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {section.title}
                    </h2>
                    <p className={`transition-colors
                      ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {section.description}
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
        </div>
      </div>
    </TutorialLayout>
  )
} 