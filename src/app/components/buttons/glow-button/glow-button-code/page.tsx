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
    command: 'npm install styled-components'
  },
  demoCode: {
    title: "Copy and paste the following code into your project.",
    code: `'use client'

import React from 'react'
import { styled } from 'styled-components'

export function GlowButton() {
  return (
    <StyledButton>
      Glow Button
    </StyledButton>
  )
}

const StyledButton = styled.button\`
  padding: 0.8em 2em;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background-color: #2563eb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: #2563eb;
    filter: blur(15px);
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    
    &:before {
      opacity: 0.5;
    }
  }
\``
  }
}

export default function GlowButtonCode() {
  const { theme } = useTheme()
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedDemo, setCopiedDemo] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const copyToClipboard = (text: string, setCopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Installation Section */}
      <div className="space-y-4">
        <h2 className={`text-xs sm:text-xl font-semibold mb-2 sm:mb-4 
          ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
          {CODE_CONTENT.installation.title}
        </h2>
        <div className={`group relative rounded-lg p-2 sm:p-4 bg-black text-white font-mono text-[10px] sm:text-sm`}>
          <div className="flex items-center space-x-1 sm:space-x-2">
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
        <div className={`group relative rounded-lg p-2 sm:p-4 bg-black text-white font-mono text-[10px] sm:text-sm
          ${expanded ? 'h-auto' : 'max-h-[300px] overflow-hidden'}`}
        >
          <pre className="overflow-x-auto">
            <code>{CODE_CONTENT.demoCode.code}</code>
          </pre>
          <button 
            onClick={() => copyToClipboard(CODE_CONTENT.demoCode.code, setCopiedDemo)}
            className="absolute top-0.5 sm:top-2 right-0.5 sm:right-2 p-0.5 sm:p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copiedDemo ? (
              <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
          )}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 hover:text-blue-400 text-sm mt-2"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  )
} 