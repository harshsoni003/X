'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'

export default function ContainerComponent() {
  const { theme } = useTheme()

  return (
    <ComponentsLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Container Component
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A responsive container for consistent content width
          </p>

          {/* Example Usage */}
          <div className={`p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Example Usage
            </h2>
            <div className="space-y-4">
              <div className="border border-blue-500 p-4 rounded-lg">
                <div className="text-center">Container Content</div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className={`mt-8 p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Code
            </h2>
            <pre className={`p-4 rounded-lg overflow-x-auto
              ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <code>{`<div className="container mx-auto px-4">
  {/* Your content here */}
</div>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </ComponentsLayout>
  )
} 