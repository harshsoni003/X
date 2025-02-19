'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function LayoutComponents() {
  const { theme } = useTheme()

  const components = [
    {
      title: 'Container',
      description: 'A responsive container component for content layout',
      href: '/components/layout/container',
      image: 'https://picsum.photos/400/200',
    },
    {
      title: 'Grid',
      description: 'Flexible grid system for complex layouts',
      href: '/components/layout/grid',
      image: 'https://picsum.photos/400/201',
    },
    {
      title: 'Stack',
      description: 'Vertical and horizontal stack layouts',
      href: '/components/layout/stack',
      image: 'https://picsum.photos/400/202',
    },
  ]

  return (
    <ComponentsLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Layout Components
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Essential components for building responsive layouts
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {components.map((component) => (
              <Link 
                key={component.href}
                href={component.href}
                className={`group block p-6 rounded-lg border transition-all duration-200 hover:scale-[1.02]
                  ${theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700' 
                    : 'bg-white border-gray-200 hover:border-gray-300'}`}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={component.image}
                    alt={component.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className={`text-xl font-semibold mb-2 transition-colors
                      ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {component.title}
                    </h2>
                    <p className={`transition-colors
                      ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {component.description}
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
    </ComponentsLayout>
  )
} 