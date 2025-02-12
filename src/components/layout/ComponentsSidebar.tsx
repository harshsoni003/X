'use client'

import { 
  ChevronDown, 
  ChevronRight, 
  LayoutGrid,
  Square,
  FileInput
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
  {
    title: 'UI Elements',
    href: '/components/ui',
    icon: <Square className="w-4 h-4" />,
    children: [
      { title: 'Buttons', href: '/components/ui/buttons' },
      { title: 'Cards', href: '/components/ui/cards' },
      { title: 'Modals', href: '/components/ui/modals' },
    ],
  },
  {
    title: 'Forms',
    href: '/components/forms',
    icon: <FileInput className="w-4 h-4" />,
    children: [
      { title: 'Input', href: '/components/forms/input' },
      { title: 'Select', href: '/components/forms/select' },
      { title: 'Checkbox', href: '/components/forms/checkbox' },
    ],
  },
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
        className={`flex items-center px-4 py-2 text-sm group transition-colors
          ${isActive 
            ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' 
            : theme === 'dark'
              ? 'text-gray-300 hover:bg-gray-900'
              : 'text-gray-700 hover:bg-gray-100'}`}
        style={{ paddingLeft: `${level * 12 + 16}px` }}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        <span className="flex-1">{item.title}</span>
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
        <div className="mt-1">
          {item.children?.map((child) => (
            <NavItemComponent 
              key={child.href} 
              item={child} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  )
}

const ComponentsSidebar = () => {
  const { theme } = useTheme()

  return (
    <div className={`w-64 min-h-screen fixed left-0 top-0 overflow-y-auto border-r transition-colors duration-200
      ${theme === 'dark'
        ? 'bg-black border-gray-800'
        : 'bg-white border-gray-200'}`}>
      <div className={`p-4 border-b transition-colors
        ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
        <h2 className={`text-xl font-semibold
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Components
        </h2>
        <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          v1.0.0
        </div>
      </div>
      <nav className="py-4 w-full">
        {Array.from({ length: navigation.length }).map((_, index) => (
          <NavItemComponent 
            key={navigation[index].href} 
            item={navigation[index]} 
          />
        ))}
      </nav>
    </div>
  )
}

export default ComponentsSidebar 