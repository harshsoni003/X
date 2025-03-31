'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { GradientButtonDemo } from './gradient-button/gradient-button-css/gradient'
// import { ShineButton } from './shine-button/shine-button-css/shine'
import { RainbowButton } from './rainbow-button/rainbow-button-css/rainbow'
import { PulseButton } from './pulse-button/pulse-button-css/pulse'
import { StarBorderDemo } from './star-border/star-border-css/star'

export default function ButtonsComponents() {
  const { theme } = useTheme()

  const components = [
    {
      title: 'Gradient Button',
      description: 'Beautiful gradient animated buttons',
      href: '/components/buttons/gradient-button',
      Component: GradientButtonDemo
    },
    // Comment out or remove the ShineButton component until it's created
    /*
    {
      title: 'Shine Button',
      description: 'Buttons with shimmering effect',
      href: '/components/buttons/shine-button',
      Component: ShineButton
    },
    */
    {
      title: 'Rainbow Button',
      description: 'Beautiful rainbow animated button',
      href: '/components/buttons/rainbow-button',
      Component: RainbowButton
    },
    {
      title: 'Pulse Button',
      description: 'Animated pulsing effect buttons',
      href: '/components/buttons/pulse-button',
      Component: PulseButton
    },
    {
      title: 'Star Border Button',
      description: 'Button with animated star border effect',
      href: '/components/buttons/star-border',
      Component: StarBorderDemo
    },
  ]

  return (
    <ComponentsLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Button Components
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A collection of beautiful and interactive button components
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
                <div className="h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <component.Component>
                    {component.title}
                  </component.Component>
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