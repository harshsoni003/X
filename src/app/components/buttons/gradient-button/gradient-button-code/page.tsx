"use client"

import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'
import { cn } from "@/lib/utils"

const CODE_CONTENT = {
  installation: {
    title: "Installation",
    packageManagers: ['npm'],
    command: 'npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge'
  },
  demoCode: {
    title: "Copy and paste the following code into your project.",
    code: `"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center",
    "rounded-[11px] min-w-[132px] px-9 py-4",
    "text-base leading-[19px] font-[500] text-white",
    "font-sans font-bold",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "",
        variant: "gradient-button-variant",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }`
  }
}

export default function GradientButtonCode() {
  const { theme } = useTheme()
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedDemo, setCopiedDemo] = useState(false)
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

  // Format code with syntax highlighting
  const formatCode = (code: string) => {
    return code.split('\n').map((line, i) => (
      <div key={i} className="block whitespace-pre-wrap break-all sm:break-words">
        {line.split(/([A-Za-z]+|[<>/{}()="']|\s+)/).filter(Boolean).map((part, j) => {
          if (/^(export|function|default|import|from|return|interface|extends)$/.test(part)) {
            return <span key={j} className="text-pink-500">{part}</span>;
          }
          if (/^(GradientButton|React|cn|className)$/.test(part)) {
            return <span key={j} className="text-purple-400">{part}</span>;
          }
          if (/^(className|style|href|title|containerClassName)$/.test(part)) {
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
    ))
  }

  return (
    <div className="p-4 sm:p-6 w-full overflow-hidden">
      {/* Installation section */}
      <div className="mb-8">
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
            aria-label="Copy installation command"
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

      {/* Code section */}
      <div>
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
              aria-label="Copy code"
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
      </div>
    </div>
  )
} 