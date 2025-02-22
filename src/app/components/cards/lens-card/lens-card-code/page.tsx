'use client'

import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'

interface CodeBlockProps {
  code: string
  copied: boolean
  setCopied: (value: boolean) => void
  expanded: boolean
  setExpanded: (value: boolean) => void
}

const INSTALLATION_TABS = [
  { id: 'cli' as const, label: 'CLI' },
  { id: 'manual' as const, label: 'Manual' }
] as const

const CODE_CONTENT = {
  installation: {
    title: "Installation",
    packageManagers: ['npm'],
    command: 'npm install framer-motion class-variance-authority'
  },
  demoCode: {
    title: "Copy and paste the following code into your project.",
    code: `"use client"
    import { Button } from "@/components/ui/button"
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
    import { Lens } from "@/components/infinityui/lens"
    
    export default function LensDemo() {
      return (
        <Card className="relative max-w-md shadow-none">
          <CardHeader>
            <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
                alt="image placeholder"
                width={500}
                height={500}
              />
            </Lens>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">Your next camp</CardTitle>
            <CardDescription>
              See our latest and best camp destinations all across the five continents of the globe.
            </CardDescription>
          </CardContent>
          <CardFooter className="space-x-4">
            <Button>Let's go</Button>
            <Button variant="secondary">Another time</Button>
          </CardFooter>
        </Card>
      )
    }`
  },
  interfaceCode: {
    title: "Copy and paste the following code into your project.",
    code: `"use client"

import { AnimatePresence, motion, useMotionTemplate } from "motion/react"
import type React from "react"
import { useCallback, useMemo, useRef, useState } from "react"

interface Position {
  x: number
  y: number
}

interface LensProps {
  children: React.ReactNode
  zoomFactor?: number
  lensSize?: number
  position?: Position
  defaultPosition?: Position
  isStatic?: boolean
  duration?: number
  lensColor?: string
  ariaLabel?: string
}

export function Lens({
  children,
  zoomFactor = 1.3,
  lensSize = 170,
  isStatic = false,
  position = { x: 0, y: 0 },
  defaultPosition,
  duration = 0.1,
  lensColor = "black",
  ariaLabel = "Zoom Area",
}: LensProps) {
  if (zoomFactor < 1) {
    throw new Error("zoomFactor must be greater than 1")
  }
  if (lensSize < 0) {
    throw new Error("lensSize must be greater than 0")
  }

  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState<Position>(position)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentPosition = useMemo(() => {
    if (isStatic) return position
    if (defaultPosition && !isHovering) return defaultPosition
    return mousePosition
  }, [isStatic, position, defaultPosition, isHovering, mousePosition])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setIsHovering(false)
  }, [])

  const maskImage = useMotionTemplate\`radial-gradient(circle \${lensSize / 2}px at \${currentPosition.x}px \${currentPosition.y}px, \${lensColor} 100%, transparent 100%)\`

  const LensContent = useMemo(() => {
    const { x, y } = currentPosition

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.58 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration }}
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          transformOrigin: \`\${x}px \${y}px\`,
          zIndex: 50,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: \`scale(\${zoomFactor})\`,
            transformOrigin: \`\${x}px \${y}px\`,
          }}
        >
          {children}
        </div>
      </motion.div>
    )
  }, [currentPosition, lensSize, lensColor, zoomFactor, children, duration])

  return (
    <div
      ref={containerRef}
      className="relative z-20 overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {children}
      {isStatic || defaultPosition ? (
        LensContent
      ) : (
        <AnimatePresence mode="popLayout">{isHovering && LensContent}</AnimatePresence>
      )}
    </div>
  )
}`
  },
}

export default function LensCardCode() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState<'cli' | 'manual'>('cli')
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedInterface, setCopiedInterface] = useState(false)
  const [copiedDemo, setCopiedDemo] = useState(false)
  const [expanded1, setExpanded1] = useState(false)
  const [expanded2, setExpanded2] = useState(false)

  const copyToClipboard = async (text: string, setCopied: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const CodeBlock = ({ 
    code, 
    copied, 
    setCopied, 
    expanded, 
    setExpanded 
  }: CodeBlockProps) => (
    <div className="relative">
      <div className={`relative rounded-lg overflow-hidden
        ${theme === 'dark' ? 'bg-black' : 'bg-gray-900'}
        sm:text-base text-[11px]`}>
        <div className="absolute right-1 top-1 sm:right-2 sm:top-2 flex gap-1 sm:gap-2">
          <button 
            onClick={() => copyToClipboard(code, setCopied)}
            className="p-1 sm:p-2 rounded-md sm:rounded-lg hover:bg-gray-800 transition-colors"
          >
            {copied ? (
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
        <pre className={`p-2 sm:p-4 overflow-x-auto ${!expanded ? 'max-h-[120px] sm:max-h-[400px]' : ''}`}>
          <code className="language-tsx text-[11px] sm:text-base">
            {code.split('\n').map((line: string, i: number) => (
              <span key={i} className="block">
                {line.split(/([A-Za-z]+|[<>/{}()="]|\s+)/).filter(Boolean).map((part: string, j: number) => {
                  if (/^(export|function|default|import|from|return)$/.test(part)) {
                    return <span key={j} className="text-pink-500">{part}</span>;
                  }
                  if (/^(Card|CardHeader|CardContent|CardTitle|CardDescription|CardFooter|Button|Lens)$/.test(part)) {
                    return <span key={j} className="text-purple-400">{part}</span>;
                  }
                  if (/^(className|src|alt|width|height|zoomFactor|lensSize|isStatic|ariaLabel|variant)$/.test(part)) {
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
                  return <span key={j} className="text-white">{part}</span>;
                })}
              </span>
            ))}
          </code>
        </pre>
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-16 bg-gradient-to-t from-black to-transparent flex items-end justify-center pb-1 sm:pb-4">
            <button
              onClick={() => setExpanded(true)}
              className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-gray-800 text-[10px] sm:text-sm text-gray-300 hover:bg-gray-700 transition-colors"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="space-y-3 sm:space-y-6 px-2 sm:px-6 md:px-8">
      <div className="max-w-[280px] sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto">
        <h2 className={`text-xs sm:text-xl font-semibold mb-2 sm:mb-4 
          ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
          {CODE_CONTENT.installation.title}
        </h2>
        
        {/* Installation Tabs */}
        <div className="flex space-x-1 sm:space-x-4 mb-2 sm:mb-4">
          {INSTALLATION_TABS.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-1.5 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-sm transition-colors
                ${activeTab === tab.id
                  ? theme === 'dark' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-black'
                  : theme === 'dark' 
                    ? 'text-gray-400' 
                    : 'text-gray-600'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Command Box */}
        <div className={`relative group mb-2 sm:mb-6 rounded-lg overflow-hidden
          ${theme === 'dark' ? 'bg-black' : 'bg-gray-900'}`}>
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
        <h2 className={`text-xs sm:text-xl font-semibold mb-2 sm:mb-4 mt-4 sm:mt-8 
          ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
          {CODE_CONTENT.demoCode.title}
        </h2>
        <CodeBlock 
          code={CODE_CONTENT.demoCode.code}
          copied={copiedDemo}
          setCopied={setCopiedDemo}
          expanded={expanded2}
          setExpanded={setExpanded2}
        />

        {/* Interface Code Section */}
        <h2 className={`text-xs sm:text-xl font-semibold mb-2 sm:mb-4 mt-4 sm:mt-8 
          ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
          {CODE_CONTENT.interfaceCode.title}
        </h2>
        <CodeBlock 
          code={CODE_CONTENT.interfaceCode.code}
          copied={copiedInterface}
          setCopied={setCopiedInterface}
          expanded={expanded1}
          setExpanded={setExpanded1}
        />
      </div>
    </div>
  )
}