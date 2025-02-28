'use client'

import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'
import styled from 'styled-components'

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
    command: 'npm install framer-motion @next/font styled-components'
  },
  demoCode: {
    title: "Copy and paste the following code into your project.",
    code: `'use client'

import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn(
      "relative p-[4px] group transition-all duration-300",
      "hover:shadow-[0_0_2rem_-0.5rem_#ffc414,0_0_4rem_-1rem_#1ca0fb]",
      containerClassName
    )}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export function Stack() {
  return (
    <div className="relative">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-black">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div 
            className="relative w-full h-[180px] sm:h-[220px] cursor-pointer overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.25 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/images/shoes.webp"
              alt="Air Jordan Shoes"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black dark:text-white 
              transition-all duration-300 hover:cursor-pointer
              hover:text-shadow-[0_0_1rem_#ffc414]
              dark:hover:text-shadow-[0_0_1rem_#1ca0fb]">
              Air Jordan 4 Retro Reimagined
            </h3>
            
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                In Stock
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Release: Feb 17, 2024
              </span>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-[90%]">
            Enter raffles and secure your pair of the upcoming Air Jordan 4 Retro Reimagined Bred release.
          </p>

          <div className="flex gap-3 w-full pt-2">
            <button 
              className="flex-1 rounded-xl px-4 py-2.5 text-white bg-black text-sm font-medium 
                dark:bg-zinc-800 flex items-center justify-center group 
                transition-all duration-300
                hover:shadow-[0_0_1rem_-0.2rem_#ffc414]
                hover:bg-gradient-to-r hover:from-black hover:to-zinc-800
                dark:hover:shadow-[0_0_1rem_-0.2rem_#1ca0fb]">
              <span>Buy now</span>
              <span className="ml-2 bg-zinc-700 rounded-lg px-2 py-0.5 text-xs 
                group-hover:bg-zinc-600 group-hover:shadow-inner transition-all">
                $100
              </span>
            </button>
            <button 
              className="flex-1 rounded-xl px-4 py-2.5 text-black dark:text-white 
                border border-neutral-200 dark:border-neutral-700 text-sm font-medium 
                transition-all duration-300
                hover:border-transparent
                hover:shadow-[0_0_1rem_-0.2rem_#ffc414]
                hover:bg-gradient-to-r hover:from-white hover:to-neutral-50
                dark:hover:shadow-[0_0_1rem_-0.2rem_#1ca0fb]
                dark:hover:bg-gradient-to-r dark:hover:from-zinc-800 dark:hover:to-zinc-900">
              Learn More
            </button>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  )
}`
  }
}

export default function StackCardCode() {
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
                  if (/^(BackgroundGradient|Image)$/.test(part)) {
                    return <span key={j} className="text-purple-400">{part}</span>;
                  }
                  if (/^(src|alt|height|width|className)$/.test(part)) {
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