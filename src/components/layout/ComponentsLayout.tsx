'use client'

import ComponentsSidebar from './ComponentsSidebar'
import ComponentsHeader from './ComponentsHeader'
import { useTheme } from '@/context/ThemeContext'

const ComponentsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { theme } = useTheme()
  
  return (
    <div className={`flex min-h-screen transition-colors duration-200
      ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <ComponentsSidebar />
      <div className="flex-1 ml-64">
        <ComponentsHeader />
        <main className="pt-16 px-6">
          <div className="max-w-4xl mx-auto py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ComponentsLayout 