'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'

export default function StackComponent() {
  const { theme } = useTheme()

  return (
    <ComponentsLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Stack Component
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Vertical and horizontal stack layouts for consistent spacing
          </p>

          {/* Vertical Stack Example */}
          <div className={`p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Vertical Stack Example
            </h2>
            <div className="space-y-4">
              <div className="border border-blue-500 p-4 rounded-lg text-center">Item 1</div>
              <div className="border border-blue-500 p-4 rounded-lg text-center">Item 2</div>
              <div className="border border-blue-500 p-4 rounded-lg text-center">Item 3</div>
            </div>
          </div>

          {/* Horizontal Stack Example */}
          <div className={`mt-8 p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Horizontal Stack Example
            </h2>
            <div className="flex space-x-4">
              <div className="border border-blue-500 p-4 rounded-lg text-center">Item 1</div>
              <div className="border border-blue-500 p-4 rounded-lg text-center">Item 2</div>
              <div className="border border-blue-500 p-4 rounded-lg text-center">Item 3</div>
            </div>
          </div>

          {/* Code Examples */}
          <div className={`mt-8 p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Code
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className={`text-lg font-semibold mb-2
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Vertical Stack
                </h3>
                <pre className={`p-4 rounded-lg overflow-x-auto
                  ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <code>{`<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-2
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Horizontal Stack
                </h3>
                <pre className={`p-4 rounded-lg overflow-x-auto
                  ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <code>{`<div className="flex space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentsLayout>
  )
} 