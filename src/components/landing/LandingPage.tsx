'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { 
  FaReact, 
  FaCode, 
  FaPaintBrush, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram 
} from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'
import { 
  SiReact, 
  SiNextdotjs, 
  SiSupabase, 
  SiTypescript, 
  SiMongodb, 
  SiTailwindcss, 
  SiRender 
} from 'react-icons/si'
import { RxSlash } from 'react-icons/rx'
import { AnimatedBeam, Circle } from '@/components/ui/animated-beam'

export default function LandingPage() {
  const router = useRouter()
  const { theme } = useTheme()
  
  // Add refs for the container and circles
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const websiteRef = useRef<HTMLDivElement>(null)
  const dataRef = useRef<HTMLDivElement>(null)
  const pdfRef = useRef<HTMLDivElement>(null)
  const integrationsRef = useRef<HTMLDivElement>(null)
  const supabaseRef = useRef<HTMLDivElement>(null)
  const mongodbRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`min-h-screen flex flex-col justify-start items-start transition-colors duration-200 px-8 sm:px-16
      ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="pt-20 sm:pt-32"></div>

      {/* Main content wrapper */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-32">
        {/* Left side - Hero content */}
        <div className="w-full lg:max-w-2xl">
          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide leading-tight text-left
            ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Launch Faster,<br />
            <span className="inline-block">
              Build<span className="inline-block bg-gray-200 text-black px-3 py-1 rotate-2 transform">Smarter.</span>
            </span>
          </h1>
          
          <p className={`text-xl sm:text-2xl mt-8 max-w-2xl text-left
            ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Pre-built templates, components, auth, and one-click deploy everything you need to launch your SaaS, AI tool, or web app quickly.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex items-center space-x-6 mt-12">
            <SiReact size={28} className={`hover:scale-110 transition-transform duration-200
              ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
            <SiNextdotjs size={28} className={`hover:scale-110 transition-transform duration-200
              ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
            <SiSupabase size={28} className={`hover:scale-110 transition-transform duration-200
              ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
            <SiTypescript size={28} className={`hover:scale-110 transition-transform duration-200
              ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
            <SiMongodb size={28} className={`hover:scale-110 transition-transform duration-200
              ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
            <SiTailwindcss size={28} className={`hover:scale-110 transition-transform duration-200
              ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
            <SiRender size={28} className={`hover:scale-110 transition-transform duration-200
              ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <button 
              className={`px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform duration-300
                ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'}`}
              onClick={() => router.push('/components')}
            >
              Browse Components
            </button>
            <button 
              className={`px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform duration-300
                ${theme === 'dark' ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' : 'bg-gradient-to-r from-blue-500 to-green-400 text-white'}`}
              onClick={() => router.push('/templates')}
            >
              Browse Templates
            </button>
          </div>
        </div>

        {/* Right side - Diagram */}
        <div ref={containerRef} className="w-full lg:w-[450px] mt-12 lg:-mt-4 relative">
          <div className="relative w-full aspect-square">
            {/* Center rtrvr.ai circle */}
            <Circle
              ref={centerRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               bg-gradient-to-r from-green-400 to-blue-500 text-white border-none w-20 h-20"
            >
              <span className="text-sm text-white">InfinityUI</span>
            </Circle>

            {/* Animated beams */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={websiteRef}
              pathColor="#FF6B2C"
              gradientStartColor="#FF6B2C"
              gradientStopColor="#FF6B2C"
              curvature={50}
              delay={0}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={dataRef}
              pathColor="#FF6B2C"
              gradientStartColor="#FF6B2C"
              gradientStopColor="#FF6B2C"
              curvature={50}
              delay={0.2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={pdfRef}
              pathColor="#FF6B2C"
              gradientStartColor="#FF6B2C"
              gradientStopColor="#FF6B2C"
              curvature={50}
              delay={0.4}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={integrationsRef}
              pathColor="#FF6B2C"
              gradientStartColor="#FF6B2C"
              gradientStopColor="#FF6B2C"
              curvature={50}
              delay={0.6}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={supabaseRef}
              pathColor="#FF6B2C"
              gradientStartColor="#FF6B2C"
              gradientStopColor="#FF6B2C"
              curvature={50}
              delay={0.8}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={mongodbRef}
              pathColor="#FF6B2C"
              gradientStartColor="#FF6B2C"
              gradientStopColor="#FF6B2C"
              curvature={50}
              delay={1.0}
            />

            {/* Corner circles */}
            <Circle ref={websiteRef} className="absolute top-8 left-8">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-xl">
                <SiReact className="w-6 h-6 text-white" />
              </div>
            </Circle>

            <Circle ref={dataRef} className="absolute top-8 right-8">
              <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-3 rounded-xl">
                <SiNextdotjs className="w-6 h-6 text-white" />
              </div>
            </Circle>

            <Circle ref={pdfRef} className="absolute bottom-8 left-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                <SiTypescript className="w-6 h-6 text-white" />
              </div>
            </Circle>

            <Circle ref={integrationsRef} className="absolute bottom-8 right-8">
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 p-3 rounded-xl">
                <SiTailwindcss className="w-6 h-6 text-white" />
              </div>
            </Circle>

            <Circle ref={supabaseRef} className="absolute top-1/2 right-8 -translate-y-1/2">
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-xl">
                <SiSupabase className="w-6 h-6 text-white" />
              </div>
            </Circle>

            <Circle ref={mongodbRef} className="absolute top-1/2 left-8 -translate-y-1/2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                <SiMongodb className="w-6 h-6 text-white" />
              </div>
            </Circle>
            

            {/* Labels */}
            <div className="absolute top-24 left-4 text-sm">React</div>
            <div className="absolute top-24 right-4 text-sm">Next.js</div>
            <div className="absolute bottom-24 left-8 text-sm">TypeScript</div>
            <div className="absolute bottom-24 right-4 text-sm">Tailwind</div>
            <div className="absolute top-1/2 right-24 -translate-y-1/2 text-sm">Supabase</div>
            <div className="absolute top-1/2 left-24 -translate-y-1/2 text-sm">MongoDB</div>
          </div>
        </div>
      </div>
      
      <div className="w-full px-8">
        <hr className={`w-full max-w-7xl mx-auto mt-16 
          ${theme === 'dark' ? 'border-gray-800' : 'border-gray-300'}`} 
        />
      </div>

      {/* Founders Section */}
      <div className="w-full flex justify-center items-center mt-8 sm:mt-16">
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-6xl px-4 space-y-8 lg:space-y-0">
          <div className="relative w-full sm:w-3/4 lg:w-1/2 aspect-[12/14] max-w-xl">
            <Image
              src="/images/header.jpg"
              alt="Founder"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 50vw"
              className="rounded-lg shadow-lg object-cover transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>
          
          <div className="lg:ml-8 text-left w-full lg:w-1/2 max-w-xl">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-2
              ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Founder
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base`}>
              The visionary behind our innovative future
            </p>
            
            <div className="mt-6">
              <h3 className={`text-lg sm:text-xl font-semibold
                ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Harsh Soni
              </h3>
              <p className="text-blue-500 text-sm sm:text-base">Full Stack Developer & UI/UX Engineer</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base mt-2`}>
                Harsh Soni is a passionate developer focused on creating innovative web applications'
              
              </p>
              <div className="flex space-x-4 mt-4">
                <FaLinkedin className={`w-6 h-6 cursor-pointer transition-colors duration-300
                  ${theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`} />
                <FaFacebook className={`w-6 h-6 cursor-pointer transition-colors duration-300
                  ${theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`} />
                <FaInstagram className={`w-6 h-6 cursor-pointer transition-colors duration-300
                  ${theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add more space between founder and footer */}
      <div className="mt-20"></div>

      {/* Footer Section */}
      <footer className={`w-full max-w-6xl mx-auto px-4 py-8 border-t
        ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold
              ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              InfinityX
            </h3>
            <p className={`text-sm
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Building the future of web development, one component at a time.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold
              ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/templates" 
                  className={`text-sm hover:underline
                    ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/components" 
                  className={`text-sm hover:underline
                    ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                  Components
                </Link>
              </li>
              <li>
                <Link href="/tutorial" 
                  className={`text-sm hover:underline
                    ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                  Tutorial
                </Link>
              </li>
              <li>
                <Link href="/pricing" 
                  className={`text-sm hover:underline
                    ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold
              ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" 
                  className={`text-sm hover:underline
                    ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" 
                  className={`text-sm hover:underline
                    ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" 
                  className={`text-sm hover:underline
                    ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold
              ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Connect
            </h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer"
                className={`hover:text-blue-500 transition-colors duration-200
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className={`hover:text-blue-500 transition-colors duration-200
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://discord.com" target="_blank" rel="noopener noreferrer"
                className={`hover:text-blue-500 transition-colors duration-200
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright - removed extra border-t */}
        <div className={`mt-8 pt-8 text-center text-sm
          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>© 2024 InfinityX. All rights reserved.</p>
        </div>
      </footer>

      <div className="pb-8"></div>
    </div>
  )
} 