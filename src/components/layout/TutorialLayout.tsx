'use client'

import TutorialSidebar from './TutorialSidebar'
import TutorialHeader from './TutorialHeader'
import { useTheme } from '@/context/ThemeContext'

export default function TutorialLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  return (
    <div className={`flex min-h-screen transition-colors duration-200
      ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <TutorialSidebar />
      <div className="flex-1 md:ml-64">
        <TutorialHeader />
        <main className="pt-16 px-6">
          <div className="max-w-4xl mx-auto py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 