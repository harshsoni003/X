'use client'

import { ChevronDown, ChevronRight, Book, Code, Rocket, ChevronsRight, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'

interface NavItem {
  title: string
  href: string
  icon?: React.ReactNode
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/getting-started',
    icon: <Rocket className="w-4 h-4" />,
    children: [
      { title: 'Installation', href: '/getting-started/installation' },
      { title: 'Quick Start', href: '/getting-started/quick-start' },
    ],
  },
  {
    title: 'Building Your Application',
    href: '/building-your-application',
    icon: <Book className="w-4 h-4" />,
    children: [
      { title: 'Routing', href: '/building-your-application/routing' },
      { title: 'Data Fetching', href: '/building-your-application/data-fetching' },
      { title: 'Styling', href: '/building-your-application/styling' },
    ],
  },
  {
    title: 'API Reference',
    href: '/api-reference',
    icon: <Code className="w-4 h-4" />,
    children: [
      { title: 'Components', href: '/api-reference/components' },
      { title: 'Hooks', href: '/api-reference/hooks' },
      { title: 'Utilities', href: '/api-reference/utilities' },
    ],
  },
]

const NavItemComponent = ({ item, level = 0 }: { item: NavItem; level?: number }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const pathname = usePathname()
  const isActive = pathname === item.href
  const hasChildren = item.children && item.children.length > 0
  const { theme } = useTheme()

  return (
    <div className="w-full">
      <Link
        href={item.href}
        className={`flex items-center px-4 py-2 text-sm group transition-colors relative
          ${isActive 
            ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' 
            : theme === 'dark'
              ? 'text-gray-300 hover:bg-gray-900'
              : 'text-gray-700 hover:bg-gray-100'}`}
        style={{ paddingLeft: `${level * 16 + 16}px` }}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        <span className={`flex-1 ${level === 0 ? 'font-semibold' : ''}`}>{item.title}</span>
        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsExpanded(!isExpanded)
            }}
            className={`p-1 rounded transition-colors
              ${theme === 'dark' 
                ? 'hover:bg-gray-700' 
                : 'hover:bg-gray-200'}`}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        )}
      </Link>
      {hasChildren && isExpanded && (
        <div className="relative ml-6">
          {/* Vertical Line */}
          <div className={`absolute left-0 top-0 bottom-0 w-px 
            ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}
          />
          <div className="relative">
            {item.children?.map((child) => (
              <div key={child.href} className="relative">
                {/* Horizontal Line */}
                <div className={`absolute left-0 top-1/2 w-4 h-px
                  ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}
                />
                <NavItemComponent 
                  item={child} 
                  level={level + 1} 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const Sidebar = () => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-20 left-4 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className={`p-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-110
              ${theme === 'dark' 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-white text-gray-800 hover:bg-gray-100'}`}
          >
            <ChevronsRight className="w-6 h-6" />
          </button>
        ) : null}
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`w-full md:w-64 min-h-screen fixed left-0 top-0 overflow-y-auto border-r transition-colors duration-200
          ${theme === 'dark'
            ? 'bg-black border-gray-800'
            : 'bg-white border-gray-200'}`}>
          <div className={`p-4 border-b transition-colors flex justify-between items-center
            ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
            <div>
              <h2 className={`text-xl font-semibold
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Documentation
              </h2>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                v1.0.0
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={`md:hidden p-2 rounded-lg transition-colors
                ${theme === 'dark' 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-black'}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="py-4 w-full">
            {navigation.map((item) => (
              <NavItemComponent key={item.href} item={item} />
            ))}
          </nav>
        </div>

        {/* Backdrop for mobile */}
        <div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
            ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </>
  )
}

export default Sidebar 