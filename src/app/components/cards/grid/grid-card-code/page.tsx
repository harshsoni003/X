'use client'

import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'


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
import Image from 'next/image'

export function Grid() {
  return (
    <StyledWrapper>
      <div className="grid-container">
        <div className="book">
          <Image
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
            alt="Restaurant Menu Inside"
            fill
            className="book-image"
            objectFit="cover"
          />
          <div className="cover">
            <Image
              src="https://images.unsplash.com/photo-1668703757367-818c9558978b"
              alt="Restaurant Menu Cover"
              fill
              className="cover-image"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div\`
  .grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .book {
    position: relative;
    border-radius: 10px;
    width: 280px;
    height: 320px;
    background-color: whitesmoke;
    box-shadow: 1px 1px 12px #000;
    transform: preserve-3d;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    overflow: hidden;

    @media (max-width: 640px) {
      width: 220px;
      height: 280px;
    }
  }

  .book-image, .cover-image {
    object-fit: cover;
    border-radius: 10px;
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 1px 1px 12px #000;
    overflow: hidden;
  }

  .book:hover .cover {
    transition: all 0.5s;
    transform: rotatey(-80deg);
  }
\`;`
  }
}

export default function GridCardCode() {
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
                  if (/^(Image|StyledWrapper)$/.test(part)) {
                    return <span key={j} className="text-purple-400">{part}</span>;
                  }
                  if (/^(src|alt|fill|className|objectFit)$/.test(part)) {
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
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </div>
    </div>
  )
}

const INSTALLATION_TABS = [
  { id: 'cli' as const, label: 'CLI' },
  { id: 'manual' as const, label: 'Manual' }
] as const 