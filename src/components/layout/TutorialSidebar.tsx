'use client'

import { ChevronDown, ChevronRight, Download, BookOpen, Calendar, Lock, Menu, X } from 'lucide-react'
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
  // {
  //   title: 'Payment gateway',
  //   href: '/tutorial/another-title-1',
  //   icon: <BookOpen className="w-4 h-4" />,
  //   children: [
  //     { title: 'Download Template', href: '/tutorial/another-title-1/download' },
  //     { title: 'View Tutorial', href: '/tutorial/another-title-1/view', icon: <Lock className="w-4 h-4 ml-2" /> },
  //     { title: 'Schedule Meeting', href: '/tutorial/another-title-1/schedule', icon: <Lock className="w-4 h-4 ml-2" /> },
  //   ],
  // },
  // {
  //   title: 'Email verification',
  //   href: '/tutorial/another-title-2',
  //   icon: <Calendar className="w-4 h-4" />,
  //   children: [
  //     { title: 'Download Template', href: '/tutorial/another-title-2/download' },
  //     { title: 'View Tutorial', href: '/tutorial/another-title-2/view', icon: <Lock className="w-4 h-4 ml-2" /> },
  //     { title: 'Schedule Meeting', href: '/tutorial/another-title-2/schedule', icon: <Lock className="w-4 h-4 ml-2" /> },
  //   ],
  // },
  // {
  //   title: 'Admin dashboard',
  //   href: '/tutorial/another-title-3',
  //   icon: <Download className="w-4 h-4" />,
  //   children: [
  //     { title: 'Download Template', href: '/tutorial/another-title-3/download' },
  //     { title: 'View Tutorial', href: '/tutorial/another-title-3/view', icon: <Lock className="w-4 h-4 ml-2" /> },
  //     { title: 'Schedule Meeting', href: '/tutorial/another-title-3/schedule', icon: <Lock className="w-4 h-4 ml-2" /> },
  //   ],
  // },
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
                <Link
                  href={child.href}
                  className={`flex items-center px-4 py-2 text-sm group transition-colors
                    ${pathname === child.href 
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                      : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-900'
                        : 'text-gray-700 hover:bg-gray-100'}`}
                  style={{ paddingLeft: `${(level + 1) * 16 + 16}px` }}
                >
                  <span className="flex-1">{child.title}</span>
                  {child.icon && <span>{child.icon}</span>}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function TutorialSidebar() {
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
                Tutorial
              </h2>
              <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                v1.0.0
              </div>
            </div>
          </div>

          <nav className="py-4">
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