'use client'

import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  copied: boolean
  setCopied: (value: boolean) => void
  expanded: boolean
  setExpanded: (value: boolean) => void
}

const CODE_CONTENT = {
  installation: {
    title: "Installation",
    packageManagers: ['npm'],
    command: 'npm install tailwindcss'
  },
  demoCode: {
    title: "Copy and paste the following code into your project.",
    code: `import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(var(--foreground))"

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px]",
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-20 dark:opacity-70" 
        )}
        style={{
          background: \`radial-gradient(circle, \${defaultColor}, transparent 10%)\`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-20 dark:opacity-70"
        )}
        style={{
          background: \`radial-gradient(circle, \${defaultColor}, transparent 10%)\`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-1 border text-foreground text-center text-base py-4 px-6 rounded-[20px]",
        "bg-gradient-to-b from-background/90 to-muted/90 border-border/40",
        "dark:from-background dark:to-muted dark:border-border"
      )}>
        {children}
      </div>
    </Component>
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
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
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
    <div key={i} className="block">
      {line.split(/([A-Za-z]+|[<>/{}()="]|\s+)/).filter(Boolean).map((part, j) => {
        if (/^(export|function|default|import|from|return|interface|extends)$/.test(part)) {
          return <span key={j} className="text-pink-500">{part}</span>;
        }
        if (/^(StarBorder|React|cn|className|ElementType|ComponentPropsWithoutRef)$/.test(part)) {
          return <span key={j} className="text-purple-400">{part}</span>;
        }
        if (/^(className|style|color|speed|as)$/.test(part)) {
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
        if (/^(const|let|var)$/.test(part)) {
          return <span key={j} className="text-red-400">{part}</span>;
        }
        if (/^(true|false|null|undefined)$/.test(part)) {
          return <span key={j} className="text-yellow-300">{part}</span>;
        }
        return <span key={j} className="text-white">{part}</span>;
      })}
    </div>
  ));
};

export default function StarBorderCode() {
  const { theme } = useTheme()
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedDemo, setCopiedDemo] = useState(false)
  const [copiedConfig, setCopiedConfig] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const copyToClipboard = async (text: string, setCopied: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="space-y-3 sm:space-y-6 px-2 sm:px-6 md:px-8">
      <div className="max-w-[280px] sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto">
        <h2 className={cn(
          "text-xs sm:text-xl font-semibold mb-2 sm:mb-4",
          theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
        )}>
          {CODE_CONTENT.installation.title}
        </h2>
        
        {/* Command Box */}
        <div className={cn(
          "relative group mb-2 sm:mb-6 rounded-lg overflow-hidden",
          theme === 'dark' ? 'bg-[#0F1117]' : 'bg-gray-900'
        )}>
          <div className="flex items-center px-1.5 sm:px-4 py-0.5 sm:py-2 text-[10px] sm:text-sm text-gray-400 border-b border-gray-800">
            {CODE_CONTENT.installation.packageManagers.map((pm, index) => (
              <span key={pm} className={index === 0 ? 'mr-0.5 sm:mr-2' : 'ml-0.5 sm:ml-2'}>{pm}</span>
            ))}
          </div>
          <div className="p-1.5 sm:p-4 text-[10px] sm:text-sm text-white font-mono break-all sm:break-normal">
            {CODE_CONTENT.installation.command}
          </div>
          <button 
            onClick={() => copyToClipboard(CODE_CONTENT.installation.command, setCopiedInstall)}
            className="absolute top-0.5 sm:top-2 right-0.5 sm:right-2 p-0.5 sm:p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copiedInstall ? (
              <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>

        {/* Demo Code Section */}
        <h2 className={cn(
          "text-xs sm:text-xl font-semibold mb-2 sm:mb-4 mt-4 sm:mt-8",
          theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
        )}>
          {CODE_CONTENT.demoCode.title}
        </h2>
        <div className={cn(
          "relative rounded-lg overflow-hidden",
          theme === 'dark' ? 'bg-[#0F1117]' : 'bg-gray-900',
          "sm:text-base text-[11px]"
        )}>
          <div className="absolute top-2 right-2 z-10">
            <button 
              onClick={() => copyToClipboard(CODE_CONTENT.demoCode.code, setCopiedDemo)}
              className="p-1 sm:p-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              {copiedDemo ? (
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
          <pre className={cn("p-2 sm:p-4 overflow-x-auto font-mono", !expanded && "max-h-[120px] sm:max-h-[400px]")}>
            {formatCode(CODE_CONTENT.demoCode.code)}
          </pre>
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-16 bg-gradient-to-t from-[#0F1117] to-transparent flex items-end justify-center pb-1 sm:pb-4">
              <button
                onClick={() => setExpanded(true)}
                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-gray-800 text-[10px] sm:text-sm text-gray-300 hover:bg-gray-700 transition-colors"
              >
                Show more
              </button>
            </div>
          )}
        </div>

        {/* Tailwind Config Section */}
        <h2 className={cn(
          "text-xs sm:text-xl font-semibold mb-2 sm:mb-4 mt-4 sm:mt-8",
          theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
        )}>
          {CODE_CONTENT.tailwindConfig.title}
        </h2>
        <div className={cn(
          "relative rounded-lg overflow-hidden",
          theme === 'dark' ? 'bg-[#0F1117]' : 'bg-gray-900',
          "sm:text-base text-[11px]"
        )}>
          <div className="absolute top-2 right-2 z-10">
            <button 
              onClick={() => copyToClipboard(CODE_CONTENT.tailwindConfig.code, setCopiedConfig)}
              className="p-1 sm:p-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              {copiedConfig ? (
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
          <pre className="p-2 sm:p-4 overflow-x-auto font-mono">
            {formatCode(CODE_CONTENT.tailwindConfig.code)}
          </pre>
        </div>
      </div>
    </div>
  )
} 