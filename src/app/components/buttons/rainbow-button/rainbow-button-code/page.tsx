'use client'

import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'
import { cn } from "@/lib/utils"

const CODE_CONTENT = {
  installation: {
    title: "Installation",
    packageManagers: ['npm'],
    command: 'npm install clsx tailwind-merge'
  },
  demoCode: {
    title: "Copy and paste the following code into your project.",
    code: `'use client'

import React from 'react'
import { cn } from "@/lib/utils"

export function RainbowButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 
                     rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 
                     group-hover:duration-200 animate-gradient-x"></div>
      
      {/* Button */}
      <button
        className={cn(
          "relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600",
          "text-white font-medium",
          "transition-all duration-200",
          "hover:text-gray-100",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black",
          className
        )}
        {...props}
      >
        <span className="flex items-center space-x-2">
          {children}
        </span>
      </button>
    </div>
  )
}`
  },
  tailwindConfig: {
    title: "Add these animations to your tailwind.config.js",
    code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
}`
  }
}

// Function to add syntax highlighting
const formatCode = (code: string) => {
  return code.split('\n').map((line, i) => (
    <div key={i} className="block whitespace-pre-wrap break-all sm:break-words">
      {line.split(/([A-Za-z]+|[<>/{}()="']|\s+)/).filter(Boolean).map((part, j) => {
        if (/^(export|function|default|import|from|return|interface|extends)$/.test(part)) {
          return <span key={j} className="text-pink-500">{part}</span>;
        }
        if (/^(RainbowButton|React|cn|className|group|relative|button|div)$/.test(part)) {
          return <span key={j} className="text-purple-400">{part}</span>;
        }
        if (/^(className|style|href|title|animate-gradient-x|transition|duration|opacity|blur|inset|bg-gradient-to-r)$/.test(part)) {
          return <span key={j} className="text-sky-300">{part}</span>;
        }
        if (/^["'][^"']*["']$/.test(part)) {
          return <span key={j} className="text-emerald-400">{part}</span>;
        }
        if (part.startsWith('<') || part.startsWith('</') || part === '>') {
          return <span key={j} className="text-blue-400">{part}</span>;
        }
        if (/^[{}()<>.,=]$/.test(part)) {
          return <span key={j} className="text-gray-500">{part}</span>;
        }
        if (/^(const|let|var|module|theme|extend)$/.test(part)) {
          return <span key={j} className="text-red-400">{part}</span>;
        }
        if (/^(true|false|null|undefined)$/.test(part)) {
          return <span key={j} className="text-yellow-300">{part}</span>;
        }
        if (/^(0%, 100%|50%|200%)$/.test(part)) {
          return <span key={j} className="text-orange-300">{part}</span>;
        }
        if (/^(from-pink-600|via-purple-600|to-blue-600)$/.test(part)) {
          return <span key={j} className="text-fuchsia-400">{part}</span>;
        }
        return <span key={j} className="text-white">{part}</span>;
      })}
    </div>
  ))
}

export default function RainbowButtonCode() {
  const { theme } = useTheme()
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedDemo, setCopiedDemo] = useState(false)
  const [copiedConfig, setCopiedConfig] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const copyToClipboard = (text: string, setCopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-4 p-4 sm:p-6 w-full overflow-hidden">
      {/* Installation Section */}
      <div className="space-y-4">
        <h2 className={`text-lg font-semibold mb-4
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {CODE_CONTENT.installation.title}
        </h2>
        <div className={`relative group rounded-lg overflow-hidden
          ${theme === 'dark' ? 'bg-[#0F1117]' : 'bg-gray-900'}`}>
          <div className="flex items-center px-4 py-2 text-xs text-gray-400 border-b border-gray-800">
            {CODE_CONTENT.installation.packageManagers.map((pm, index) => (
              <span key={pm} className={index === 0 ? 'mr-2' : 'ml-2'}>
                {pm}
              </span>
            ))}
          </div>
          <div className="p-4 text-sm text-white font-mono break-all sm:break-words">
            {CODE_CONTENT.installation.command}
          </div>
          <button 
            onClick={() => copyToClipboard(CODE_CONTENT.installation.command, setCopiedInstall)}
            className="absolute top-2 right-2 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copiedInstall ? (
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Demo Code Section */}
      <div className="space-y-4 mt-8">
        <h2 className={`text-lg font-semibold mb-4
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {CODE_CONTENT.demoCode.title}
        </h2>
        <div className={`relative rounded-lg overflow-hidden
          ${theme === 'dark' ? 'bg-[#0F1117]' : 'bg-gray-900'}`}>
          <div className="absolute top-2 right-2 z-10">
            <button 
              onClick={() => copyToClipboard(CODE_CONTENT.demoCode.code, setCopiedDemo)}
              className="p-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              {copiedDemo ? (
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
          <div className={`p-4 ${!expanded && 'max-h-[400px] overflow-y-auto'}`}>
            <pre className="font-mono text-sm w-full overflow-hidden">
              <code className="block break-all sm:break-words whitespace-pre-wrap">
                {formatCode(CODE_CONTENT.demoCode.code)}
              </code>
            </pre>
          </div>
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0F1117] to-transparent flex items-end justify-center pb-4">
              <button
                onClick={() => setExpanded(true)}
                className="px-3 py-1 rounded-md bg-gray-800 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
              >
                Show more
              </button>
            </div>
          )}
        </div>
        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="text-blue-500 hover:text-blue-400 text-sm mt-2"
          >
            Show less
          </button>
        )}
      </div>

      {/* Tailwind Config Section */}
      <div className="space-y-4 mt-8">
        <h2 className={`text-lg font-semibold mb-4
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {CODE_CONTENT.tailwindConfig.title}
        </h2>
        <div className={`relative rounded-lg overflow-hidden
          ${theme === 'dark' ? 'bg-[#0F1117]' : 'bg-gray-900'}`}>
          <div className="absolute top-2 right-2 z-10">
            <button 
              onClick={() => copyToClipboard(CODE_CONTENT.tailwindConfig.code, setCopiedConfig)}
              className="p-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              {copiedConfig ? (
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <pre className="font-mono text-sm w-full overflow-hidden">
              <code className="block break-all sm:break-words whitespace-pre-wrap">
                {formatCode(CODE_CONTENT.tailwindConfig.code)}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
} 