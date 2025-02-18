'use client'

import TemplatesLayout from '@/components/layout/TemplatesLayout'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function PortfolioTemplates() {
  const { theme } = useTheme()

  const templates = [
    {
      title: 'Professional Type 1',
      description: 'A clean and modern portfolio template for professionals',
      href: '/templates/portfolio/professional-type-1',
      image: 'https://picsum.photos/400/200',
    },
    {
      title: 'Resume Type 2',
      description: 'Creative resume template with modern design elements',
      href: '/templates/portfolio/resume-type-2',
      image: 'https://picsum.photos/400/201',
    },
  ]

  return (
    <TemplatesLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Portfolio Templates
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Choose from our collection of professional portfolio templates
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <Link 
                key={template.href}
                href={template.href}
                className={`group block p-6 rounded-lg border transition-all duration-200 hover:scale-[1.02]
                  ${theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700' 
                    : 'bg-white border-gray-200 hover:border-gray-300'}`}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className={`text-xl font-semibold mb-2 transition-colors
                      ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {template.title}
                    </h2>
                    <p className={`transition-colors
                      ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {template.description}
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
              Template Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Responsive Design</li>
              <li>Dark/Light Mode Support</li>
              <li>Modern Layouts</li>
              <li>Interactive Elements</li>
              <li>Customizable Sections</li>
              <li>SEO Optimized</li>
              <li>Fast Loading</li>
              <li>Mobile First</li>
            </ul>
          </div>
        </div>
      </div>
    </TemplatesLayout>
  )
} 