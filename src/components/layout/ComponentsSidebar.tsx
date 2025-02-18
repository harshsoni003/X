'use client'

import { 
  ChevronDown, 
  ChevronRight, 
  LayoutGrid,
  Square,
  FileInput,
  ChevronsRight,
  X,
  Menu
} from 'lucide-react'
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
    title: 'Layout Components',
    href: '/components/layout',
    icon: <LayoutGrid className="w-4 h-4" />,
    children: [
      { title: 'Container', href: '/components/layout/container' },
      { title: 'Grid', href: '/components/layout/grid' },
      { title: 'Stack', href: '/components/layout/stack' },
    ],
  },
  // {
  //   title: 'UI Elements',
  //   href: '/components/ui',
  //   icon: <Square className="w-4 h-4" />,
  //   children: [
  //     { title: 'Buttons', href: '/components/ui/buttons' },
  //     { title: 'Cards', href: '/components/ui/cards' },
  //     { title: 'Modals', href: '/components/ui/modals' },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   href: '/components/forms',
  //   icon: <FileInput className="w-4 h-4" />,
  //   children: [
  //     { title: 'Input', href: '/components/forms/input' },
  //     { title: 'Select', href: '/components/forms/select' },
  //     { title: 'Checkbox', href: '/components/forms/checkbox' },
  //   ],
  // },
]

function NavItemComponent({ item, level = 0 }: { item: NavItem; level?: number }) {
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

export default function ComponentsSidebar() {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-20 left-4 z-50 p-2 rounded-lg transition-colors
          ${theme === 'dark' 
            ? 'bg-gray-800 hover:bg-gray-700' 
            : 'bg-white hover:bg-gray-100'}`}
      >
        {isOpen ? (
          <X className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
        ) : (
          <Menu className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
        )}
      </button>

      <div className="relative">
        {/* Sidebar */}
        <div className={`fixed top-0 left-0 z-40 h-full w-64 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 border-r
          ${theme === 'dark' 
            ? 'bg-black border-gray-800' 
            : 'bg-white border-gray-200'}`}
        >
          <div className={`p-4 border-b transition-colors flex justify-between items-center
            ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
            <div>
              <h2 className={`text-xl font-semibold
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Components
              </h2>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                v1.0.0
              </div>
            </div>
            {/* Close button in sidebar header */}
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
              <NavItemComponent 
                key={item.href} 
                item={item} 
              />
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