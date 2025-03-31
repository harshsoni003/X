'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiReact, SiNextdotjs, SiAngular } from 'react-icons/si'

export default function StructurePage(): JSX.Element {
  const { theme } = useTheme()

  const frameworks = [
    {
      title: 'React',
      description: 'Set up a new React project with TypeScript, Tailwind CSS, and InfinityUI components.',
      icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
      href: '/components/structure/react',
      gradient: 'from-[#61DAFB]/10 to-[#61DAFB]/30'
    },
    {
      title: 'Next.js',
      description: 'Create a Next.js application with App Router, TypeScript, and InfinityUI integration.',
      icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />,
      href: '/components/structure/nextjs',
      gradient: 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900'
    },
    {
      title: 'Angular',
      description: 'Build an Angular project with SCSS, TypeScript, and InfinityUI components.',
      icon: <SiAngular className="w-8 h-8 text-[#DD0031]" />,
      href: '/components/structure/angular',
      gradient: 'from-[#DD0031]/10 to-[#DD0031]/30'
    }
  ]

  return (
    <ComponentsLayout>
      <div className="space-y-8 px-4 sm:px-6 md:px-8">
        <div>
          <h1 className={`text-3xl font-bold mb-4 
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Framework Setup Guides
          </h1>
          <p className={`text-lg mb-6
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Choose your preferred framework to get started with InfinityUI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((framework) => (
            <Link
              key={framework.title}
              href={framework.href}
              className={`group relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg
                ${theme === 'dark' 
                  ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50' 
                  : 'border-gray-200 hover:border-gray-300 bg-white'}`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${framework.gradient}`} />
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  {framework.icon}
                  <ArrowRight className={`w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1
                    ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                </div>
                
                <h2 className={`text-xl font-semibold mb-2
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {framework.title}
                </h2>
                
                <p className={`text-sm
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {framework.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ComponentsLayout>
  )
} 