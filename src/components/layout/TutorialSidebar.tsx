'use client'

import { ChevronDown, ChevronRight, Download, BookOpen, Calendar, Lock } from 'lucide-react'
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
    title: 'Sign In/Up',
    href: '/tutorial/sign-in-up',
    icon: <Download className="w-4 h-4" />,
    children: [
      { title: 'Download Template', href: '/tutorial/sign-in-up/download' },
      { title: 'View Tutorial', href: '/tutorial/sign-in-up/view', icon: <Lock className="w-4 h-4 ml-2" /> },
      { title: 'Schedule Meeting', href: '/tutorial/sign-in-up/schedule', icon: <Lock className="w-4 h-4 ml-2" /> },
    ],
  },
  {
    title: 'Payment gateway',
    href: '/tutorial/another-title-1',
    icon: <BookOpen className="w-4 h-4" />,
    children: [
      { title: 'Download Template', href: '/tutorial/another-title-1/download' },
      { title: 'View Tutorial', href: '/tutorial/another-title-1/view', icon: <Lock className="w-4 h-4 ml-2" /> },
      { title: 'Schedule Meeting', href: '/tutorial/another-title-1/schedule', icon: <Lock className="w-4 h-4 ml-2" /> },
    ],
  },
  {
    title: 'Email verification',
    href: '/tutorial/another-title-2',
    icon: <Calendar className="w-4 h-4" />,
    children: [
      { title: 'Download Template', href: '/tutorial/another-title-2/download' },
      { title: 'View Tutorial', href: '/tutorial/another-title-2/view', icon: <Lock className="w-4 h-4 ml-2" /> },
      { title: 'Schedule Meeting', href: '/tutorial/another-title-2/schedule', icon: <Lock className="w-4 h-4 ml-2" /> },
    ],
  },
  {
    title: 'Admin dashboard',
    href: '/tutorial/another-title-3',
    icon: <Download className="w-4 h-4" />,
    children: [
      { title: 'Download Template', href: '/tutorial/another-title-3/download' },
      { title: 'View Tutorial', href: '/tutorial/another-title-3/view', icon: <Lock className="w-4 h-4 ml-2" /> },
      { title: 'Schedule Meeting', href: '/tutorial/another-title-3/schedule', icon: <Lock className="w-4 h-4 ml-2" /> },
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
            <Link
              key={child.href}
              href={child.href}
              className={`flex items-center px-4 py-2 text-sm group transition-colors
                ${pathname === child.href 
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                  : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-900'
                    : 'text-gray-700 hover:bg-gray-100'}`}
              style={{ paddingLeft: `${(level + 1) * 12 + 16}px` }}
            >
              <span className="flex-1">{child.title}</span>
              {child.icon && <span>{child.icon}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function TutorialSidebar() {
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
          Documentation
        </h2>
        <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          v1.0.0
        </div>
      </div>
      <nav className="py-4 w-full">
        {navigation.map((item) => (
          <NavItemComponent key={item.href} item={item} />
        ))}
      </nav>
    </div>
  )
} 