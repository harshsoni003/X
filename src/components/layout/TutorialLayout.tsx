'use client'

import TutorialHeader from './TutorialHeader'
import TutorialSidebar from './TutorialSidebar'
import { useTheme } from '@/context/ThemeContext'

export default function TutorialLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  return (
    <div className={`flex min-h-screen transition-colors duration-300
      ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <TutorialSidebar />
      <div className="flex-1 md:ml-64">
        <TutorialHeader />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 