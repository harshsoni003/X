'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function CardsComponents() {
  const { theme } = useTheme()

  const components = [
    {
      title: 'Lens Card',
      description: 'A magnifying lens effect for images',
      href: '/components/cards/lens-card',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338',
    },
    {
      title: 'Glare Card',
      description: 'Interactive card with holographic glare effects',
      href: '/components/cards/glare-card',
      image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0',
    },
    {
      title: 'Book Card',
      description: 'Animated book opening effect card',
      href: '/components/cards/bookcard',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    },
    {
      title: 'Popup Card',
      description: 'Beautiful card with animated gradient background',
      href: '/components/cards/popupcard',
      image: '/images/shoes.webp',
    },
  ]

  return (
    <ComponentsLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Card Components
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A collection of beautiful and interactive card components
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