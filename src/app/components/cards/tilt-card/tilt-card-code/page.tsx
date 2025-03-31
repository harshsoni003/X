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

const CODE_CONTENT = {
  installation: {
    title: "Installation",
    packageManagers: ['npm'],
    command: 'npm install framer-motion'
  },
  demoCode: {
    title: "Copy and paste the following code into your project.",
    code: `"use client"

import { Tilt } from "./tilt";
import { Spotlight } from "./spotlight";

function TiltSpotlight() {
  return (
    <div className='aspect-video max-w-sm'>
      <Tilt
        rotationFactor={6}
        isRevese
        style={{
          transformOrigin: 'center center',
        }}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        className='group relative rounded-lg'
      >
        <Spotlight
          className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
          size={248}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        <img
          src='your-image-url.jpg'
          alt='Your image description'
          className='h-32 w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0'
        />
      </Tilt>
      <div className='flex flex-col space-y-0.5 pb-0 pt-3'>
        <h3 className='font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400'>
          Image Title
        </h3>
        <p className='text-sm text-black dark:text-white'>Description</p>
      </div>
    </div>
  );
}`
  }
}

export default function TiltCardCode() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState<'cli' | 'manual'>('cli')
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

  const CodeBlock = ({ code, copied, setCopied, expanded, setExpanded }: CodeBlockProps) => (
    <div className="relative">
      <div className={`relative rounded-lg overflow-hidden
        ${theme === 'dark' ? 'bg-black' : 'bg-gray-900'}
        sm:text-base text-[11px]`}>
        <div className="absolute right-1 top-1 sm:right-2 sm:top-2">
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
                  if (/^(Tilt|Spotlight)$/.test(part)) {
                    return <span key={j} className="text-purple-400">{part}</span>;
                  }
                  if (/^(className|style|src|alt|rotationFactor|isRevese|springOptions|size)$/.test(part)) {
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
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </div>
    </div>
  )
} 