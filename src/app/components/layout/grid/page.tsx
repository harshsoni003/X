'use client'

import ComponentsLayout from '@/components/layout/ComponentsLayout'
import { useTheme } from '@/context/ThemeContext'

export default function GridComponent() {
  const { theme } = useTheme()

  return (
    <ComponentsLayout>
      <div className="space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-4 transition-colors
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Grid Component
          </h1>
          <p className={`text-xl mb-8 transition-colors
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Flexible grid system for creating complex layouts
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-blue-500 p-4 rounded-lg text-center">Column 1</div>
              <div className="border border-blue-500 p-4 rounded-lg text-center">Column 2</div>
              <div className="border border-blue-500 p-4 rounded-lg text-center">Column 3</div>
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
              <code>{`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`}</code>
            </pre>
          </div>

          {/* Grid Properties */}
          <div className={`mt-8 p-6 rounded-lg border transition-colors
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-gray-300' 
              : 'bg-white border-gray-200 text-gray-700'}`}>
            <h2 className={`text-2xl font-bold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Grid Properties
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Responsive columns</li>
              <li>Gap control</li>
              <li>Auto-flow options</li>
              <li>Column/row spanning</li>
              <li>Template areas</li>
            </ul>
          </div>
        </div>
      </div>
    </ComponentsLayout>
  )
} 