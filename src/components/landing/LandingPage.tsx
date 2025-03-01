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
import FAQSection from './FAQ/FAQSection'
import FeaturesSection from './Features/FeaturesSection'
import TestimonialsSection from './Testimonials/TestimonialsSection'
import FounderSection from './Founder/FounderSection'
import FooterSection from './Footer/FooterSection'
import { motion } from 'framer-motion'

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
    <div className={`min-h-screen flex flex-col transition-colors duration-200
      ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="min-h-screen w-full overflow-hidden">
        <div className="pt-16 sm:pt-20">
          {/* Main hero section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Left side - Hero content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none mb-2">
                  <span className={`inline-block
                    ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                  >
                    Launch Faster,
                  </span>
                  <br />
                  <span className="inline-block mt-2">
                    Build
                    <span className="relative inline-block ml-2 transform rotate-1">
                      <span className={`relative z-10 px-4 rounded-lg
                        ${theme === 'dark' 
                          ? 'bg-blue-500/10 text-blue-400' 
                          : 'bg-blue-100 text-blue-700'}`}
                      >
                        Smarter
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl" />
                    </span>
                  </span>
                </h1>

                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-xl sm:text-2xl mt-8 max-w-2xl leading-relaxed
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              >
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Pre-built templates, components, and auth
                </span>{' '}
                with one-click deploy — everything you need to launch your{' '}
                <span className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
                  SaaS, AI tool, or web app
                </span>{' '}
                quickly.
              </motion.p>

              {/* Tech Stack Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-16"
              >
                <p className={`text-sm font-semibold mb-8 tracking-wider uppercase bg-clip-text text-transparent 
                  bg-gradient-to-r from-blue-400 to-purple-500`}
                >
                  Powered by Modern Tech Stack
                </p>
                
                {/* Tech Stack Icons */}
                <div className="flex flex-wrap items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-gray-900/50 hover:bg-gray-800/50' 
                        : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <SiReact className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12
                      ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} />
                    <span className={`text-sm font-medium
                      ${theme === 'dark' ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-600 group-hover:text-blue-500'}`}>
                      React
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-gray-900/50 hover:bg-gray-800/50' 
                        : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <SiNextdotjs className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12
                      ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                    <span className={`text-sm font-medium
                      ${theme === 'dark' ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-black'}`}>
                      Next.js
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-gray-900/50 hover:bg-gray-800/50' 
                        : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <SiTypescript className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12
                      ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} />
                    <span className={`text-sm font-medium
                      ${theme === 'dark' ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-600 group-hover:text-blue-500'}`}>
                      TypeScript
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-gray-900/50 hover:bg-gray-800/50' 
                        : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <SiTailwindcss className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12
                      ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-500'}`} />
                    <span className={`text-sm font-medium
                      ${theme === 'dark' ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-cyan-500'}`}>
                      Tailwind
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-gray-900/50 hover:bg-gray-800/50' 
                        : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <SiSupabase className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12
                      ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-500'}`} />
                    <span className={`text-sm font-medium
                      ${theme === 'dark' ? 'text-gray-400 group-hover:text-emerald-400' : 'text-gray-600 group-hover:text-emerald-500'}`}>
                      Supabase
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-gray-900/50 hover:bg-gray-800/50' 
                        : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <SiMongodb className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12
                      ${theme === 'dark' ? 'text-green-400' : 'text-green-500'}`} />
                    <span className={`text-sm font-medium
                      ${theme === 'dark' ? 'text-gray-400 group-hover:text-green-400' : 'text-gray-600 group-hover:text-green-500'}`}>
                      MongoDB
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-4 mt-8">
                <button 
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform duration-300
                    ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'}`}
                  onClick={() => router.push('/components')}
                >
                  Browse Components
                </button>
                <button 
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform duration-300
                    ${theme === 'dark' ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' : 'bg-gradient-to-r from-blue-500 to-green-400 text-white'}`}
                  onClick={() => router.push('/templates')}
                >
                  Browse Templates
                </button>
              </div>
            </div>

            {/*   */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div ref={containerRef} className="relative w-[350px] sm:w-[450px] lg:w-[500px] xl:w-[550px] aspect-square">
                <div className="relative w-full aspect-square p-4 sm:p-6 lg:p-8">
                  {/* Center circle - make it larger */}
                  <Circle
                    ref={centerRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     bg-gradient-to-r from-green-400 to-blue-500 text-white border-none w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28"
                  >
                    <span className="text-base sm:text-lg lg:text-xl font-medium text-white">InfinityUI</span>
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

                  {/* Corner circles with text labels */}
                  {/* Top icons - React and Next.js */}
                  <div className="absolute top-12 left-12">
                    <Circle ref={websiteRef}>
                      <div className={`group bg-gradient-to-r from-blue-400 to-blue-500 p-2.5 sm:p-3 lg:p-4 rounded-xl
                        transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25
                        ${theme === 'dark' ? 'hover:bg-blue-400' : 'hover:bg-blue-500'}`}
                      >
                        <SiReact className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white transition-transform duration-300 group-hover:rotate-180" />
                      </div>
                    </Circle>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap">
                      React
                    </div>
                  </div>

                  <div className="absolute top-12 right-12">
                    <Circle ref={dataRef}>
                      <div className={`group bg-gradient-to-r from-gray-600 to-gray-700 p-2.5 sm:p-3 lg:p-4 rounded-xl
                        transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25
                        ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-800'}`}
                      >
                        <SiNextdotjs className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </Circle>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap">
                      Next.js
                    </div>
                  </div>

                  {/* Middle icons - MongoDB and Supabase */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-12">
                    <Circle ref={mongodbRef}>
                      <div className={`group bg-gradient-to-r from-green-500 to-green-600 p-2.5 sm:p-3 lg:p-4 rounded-xl
                        transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25
                        ${theme === 'dark' ? 'hover:bg-green-500' : 'hover:bg-green-600'}`}
                      >
                        <SiMongodb className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </Circle>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap">
                      MongoDB
                    </div>
                  </div>

                  <div className="absolute top-1/2 -translate-y-1/2 right-12">
                    <Circle ref={supabaseRef}>
                      <div className={`group bg-gradient-to-r from-green-400 to-green-500 p-2.5 sm:p-3 lg:p-4 rounded-xl
                        transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25
                        ${theme === 'dark' ? 'hover:bg-green-400' : 'hover:bg-green-500'}`}
                      >
                        <SiSupabase className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </Circle>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap">
                      Supabase
                    </div>
                  </div>

                  {/* Bottom icons - TypeScript and Tailwind */}
                  <div className="absolute bottom-12 left-12">
                    <Circle ref={pdfRef}>
                      <div className={`group bg-gradient-to-r from-blue-500 to-blue-600 p-2.5 sm:p-3 lg:p-4 rounded-xl
                        transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25
                        ${theme === 'dark' ? 'hover:bg-blue-500' : 'hover:bg-blue-600'}`}
                      >
                        <SiTypescript className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </Circle>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap">
                      TypeScript
                    </div>
                  </div>

                  <div className="absolute bottom-12 right-12">
                    <Circle ref={integrationsRef}>
                      <div className={`group bg-gradient-to-r from-cyan-400 to-cyan-500 p-2.5 sm:p-3 lg:p-4 rounded-xl
                        transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25
                        ${theme === 'dark' ? 'hover:bg-cyan-400' : 'hover:bg-cyan-500'}`}
                      >
                        <SiTailwindcss className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </Circle>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap">
                      Tailwind
                    </div>
                  </div>

                  {/* Animated beams - adjust positions to match new spacing */}
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections wrapper - prevent horizontal scroll */}
        <div className="w-full overflow-x-hidden">
          <FeaturesSection />
          <FounderSection />
          <TestimonialsSection />
          <FAQSection />
          <FooterSection />
        </div>
      </div>
    </div>
  )
} 