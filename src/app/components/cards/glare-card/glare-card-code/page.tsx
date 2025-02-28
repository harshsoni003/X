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
    command: 'npm install clsx tailwind-merge'
  },
  demoCode: {
    title: "Copy and paste the following code into your project.",
    code: `import { GlareCard } from "@/components/ui/glare-card"

export function GlareCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 max-w-[750px] mx-auto">
      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="your-mountain-image.jpg"
          alt="Landscape mountain"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
          <p className="font-bold text-white text-sm">Mountain Lake</p>
          <p className="font-normal text-xs text-neutral-200 mt-1">Peaceful morning view</p>
        </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="your-aurora-image.jpg"
          alt="Northern lights"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
          <p className="font-bold text-white text-sm">Aurora Borealis</p>
          <p className="font-normal text-xs text-neutral-200 mt-1">Dancing lights</p>
        </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="your-desert-image.jpg"
          alt="Desert sunset"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
          <p className="font-bold text-white text-sm">Desert Sunset</p>
          <p className="font-normal text-xs text-neutral-200 mt-1">Golden hour magic</p>
        </div>
      </GlareCard>
    </div>
  )
}`
  },
  interfaceCode: {
    title: "Copy and paste the following code into your project.",
    code: `"use client"

import { cn } from "@/lib/utils"
import { useRef } from "react"

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const isPointerInside = useRef(false)
  const refElement = useRef<HTMLDivElement>(null)
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  })

  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "48px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  } as React.CSSProperties

  const backgroundStyle = {
    "--step": "5%",
    "--foil-svg": \`url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")\`,
    "--pattern": "var(--foil-svg) center/100% no-repeat",
    "--rainbow": "repeating-linear-gradient(0deg,rgb(255,119,115) calc(var(--step)*1),rgba(255,237,95,1) calc(var(--step)*2),rgba(168,255,95,1) calc(var(--step)*3),rgba(131,255,247,1) calc(var(--step)*4),rgba(120,148,255,1) calc(var(--step)*5),rgb(216,117,255) calc(var(--step)*6),rgb(255,119,115) calc(var(--step)*7)) 0% var(--bg-y)/200% 700% no-repeat",
    "--diagonal": "repeating-linear-gradient(128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12%) var(--bg-x) var(--bg-y)/300% no-repeat",
    "--shade": "radial-gradient(farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.1) 12%,rgba(255,255,255,0.15) 20%,rgba(255,255,255,0.25) 120%) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "hue, hue, hue, overlay",
  } as React.CSSProperties

  return (
    <div
      style={containerStyle}
      className="relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform w-[240px] [aspect-ratio:16/19]"
      ref={refElement}
      onPointerMove={(event) => {
        const rotateFactor = 0.4
        const rect = event.currentTarget.getBoundingClientRect()
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        }
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        }
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        }

        const { background, rotate, glare } = state.current
        background.x = 50 + percentage.x / 4 - 12.5
        background.y = 50 + percentage.y / 3 - 16.67
        rotate.x = -(delta.x / 3.5)
        rotate.y = delta.y / 2
        rotate.x *= rotateFactor
        rotate.y *= rotateFactor
        glare.x = percentage.x
        glare.y = percentage.y

        if (refElement.current) {
          refElement.current.style.setProperty("--m-x", \`\${glare.x}%\`)
          refElement.current.style.setProperty("--m-y", \`\${glare.y}%\`)
          refElement.current.style.setProperty("--r-x", \`\${rotate.x}deg\`)
          refElement.current.style.setProperty("--r-y", \`\${rotate.y}deg\`)
          refElement.current.style.setProperty("--bg-x", \`\${background.x}%\`)
          refElement.current.style.setProperty("--bg-y", \`\${background.y}%\`)
        }
      }}
      onPointerEnter={() => {
        isPointerInside.current = true
        setTimeout(() => {
          if (isPointerInside.current && refElement.current) {
            refElement.current.style.setProperty("--duration", "0s")
          }
        }, 300)
      }}
      onPointerLeave={() => {
        isPointerInside.current = false
        if (refElement.current) {
          refElement.current.style.removeProperty("--duration")
          refElement.current.style.setProperty("--r-x", "0deg")
          refElement.current.style.setProperty("--r-y", "0deg")
        }
      }}
    >
      <div className="h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border-0 hover:[--opacity:0.6] hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none overflow-hidden">
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]">
          <div className={cn("h-full w-full bg-slate-950", className)}>
            {children}
          </div>
        </div>
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]" />
        <div
          className="w-full h-full grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] will-change-background transition-opacity [clip-path:inset(0_0_1px_0_round_var(--radius))] [background-blend-mode:hue_hue_hue_overlay] [background:var(--pattern),_var(--rainbow),_var(--diagonal),_var(--shade)] relative after:content-[''] after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] after:bg-[inherit] after:mix-blend-exclusion after:[background-size:var(--foil-size),_200%_400%,_800%,_200%] after:[background-position:center,_0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,_hue,_hard-light]"
          style={backgroundStyle}
        />
      </div>
    </div>
  )
}`
  }
}

export default function GlareCardCode() {
  const { theme } = useTheme()
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
                  if (/^(export|function|default|import|from|return|const|let|var|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|this|super|class|extends|implements|interface|type|enum|module|namespace|async|await|yield|static|public|private|protected|readonly|abstract|as|in|instanceof|typeof|void|delete|debugger|declare|keyof|never|object|unknown|any|boolean|number|string|symbol|bigint|null|undefined)$/.test(part)) {
                    return <span key={j} className="text-pink-500">{part}</span>;
                  }
                  if (/^(GlareCard|div|img|p|span|button|svg|path)$/.test(part)) {
                    return <span key={j} className="text-purple-400">{part}</span>;
                  }
                  if (/^(className|style|ref|src|alt|width|height|viewBox|fill|stroke|strokeWidth|strokeLinecap|strokeLinejoin|strokeMiterlimit|d|onClick|onPointerMove|onPointerEnter|onPointerLeave)$/.test(part)) {
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

        <h2 className={`text-xs sm:text-xl font-semibold mb-2 sm:mb-4 
          ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
          {CODE_CONTENT.demoCode.title}
        </h2>
        <CodeBlock 
          code={CODE_CONTENT.demoCode.code}
          copied={copiedDemo}
          setCopied={setCopiedDemo}
          expanded={expanded1}
          setExpanded={setExpanded1}
        />

        <h2 className={`text-xs sm:text-xl font-semibold mb-2 sm:mb-4 mt-4 sm:mt-8
          ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
          {CODE_CONTENT.interfaceCode.title}
        </h2>
        <CodeBlock 
          code={CODE_CONTENT.interfaceCode.code}
          copied={copiedInterface}
          setCopied={setCopiedInterface}
          expanded={expanded2}
          setExpanded={setExpanded2}
        />
      </div>
    </div>
  )
} 