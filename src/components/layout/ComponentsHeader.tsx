'use client'

import { ChevronRight, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

const getBreadcrumbs = (pathname: string) => {
  const paths = pathname.split('/').filter(Boolean)
  return paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`
    return {
      href,
      label: path.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    }
  })
}

const ComponentsHeader = () => {
  const pathname = usePathname()
  const breadcrumbs = getBreadcrumbs(pathname)
  const { theme } = useTheme()

  return (
    <header className={`h-16 w-full fixed top-0 right-0 left-64 border-b z-10 transition-colors duration-200
      ${theme === 'dark' 
        ? 'bg-black border-gray-800' 
        : 'bg-white border-gray-200'}`}>
      <div className="h-full w-full flex items-center justify-between px-6">
        <nav className="flex items-center space-x-2">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className={`w-4 h-4 mx-2
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} 
                />
              )}
              <Link
                href={breadcrumb.href}
                className={`text-sm hover:text-blue-600 transition-colors
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}
              >
                {breadcrumb.label}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="relative">
          <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2
            ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} 
          />
          <input
            type="search"
            placeholder="Search components..."
            className={`pl-10 pr-4 py-2 w-64 rounded-md border text-sm transition-colors
              ${theme === 'dark' 
                ? 'bg-gray-900 border-gray-800 text-gray-200 placeholder-gray-400 focus:border-gray-700' 
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-600 focus:border-gray-300'} 
              focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
      </div>
    </header>
  )
}

export default ComponentsHeader 