'use client'

import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import Link from 'next/link'

export default function FounderSection() {
  const { theme } = useTheme()

  return (
    <div className="w-full py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent 
              ${theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
                : 'bg-gradient-to-r from-blue-600 to-purple-700'}`}
          >
            Meet the Founder
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-lg md:text-xl
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            The visionary behind InfinityUI
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative"
        >
          {/* Image Section with Decorative Elements */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px]">
            {/* Background Gradient Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
            
            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin-slow" />
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-spin-slow-reverse" />
            
            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/best.png"
                alt="Harsh Soni"
                fill
                className="object-cover object-center scale-110"
                sizes="(max-width: 768px) 240px, (max-width: 1024px) 288px, 400px"
                priority
              />
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-500 rounded-full blur-sm opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-purple-500 rounded-full blur-sm opacity-60" />
          </div>

          {/* Content Section */}
          <div className="max-w-md text-center lg:text-left relative pt-6 lg:pt-0">
            {/* Decorative Background Element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl -z-10" />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -left-6 -top-6 w-12 h-12 bg-blue-500/10 rounded-full blur-xl" />
              <h3 className={`text-4xl sm:text-5xl font-bold mb-3 relative
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Harsh Soni
              </h3>
            </motion.div>
            
            <motion.div 
              className={`text-base sm:text-lg font-medium mb-4 relative
                ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
            >
              <span className="relative inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span>Full Stack Developer</span>
                {/* <span className="hidden sm:inline-block">•</span>
                <span>Ai Tools</span> */}
              </span>
            </motion.div>
            
            <motion.div className="space-y-3">
              <p className={`text-sm sm:text-base leading-relaxed
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                With 50+ projects experience in web Applications, I specialize in building 
                modern, high-performance applications that deliver exceptional user experiences.
              </p>

              {/* Tech Stack */}
              <div className="pt-4">
                <p className={`text-xs font-medium mb-2
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  TECH STACK
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map((tech) => (
                    <span 
                      key={tech}
                      className={`px-2.5 py-0.5 rounded-full text-xs
                        ${theme === 'dark' 
                          ? 'bg-gray-800/50 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-6 pt-4">
                <div className="text-center">
                  <p className={`text-xl font-bold
                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    20+
                  </p>
                  <p className={`text-xs
                    ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Happy Clients
                  </p>
                </div>
                <div className="text-center">
                  <p className={`text-xl font-bold
                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    30+
                  </p>
                  <p className={`text-xs
                    ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Projects
                  </p>
                </div>
                <div className="text-center">
                  <p className={`text-xl font-bold
                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    100+
                  </p>
                  <p className={`text-xs
                    ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Components
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-6 pt-6"
            >
              <Link 
                href="https://github.com/harshsoni003" 
                target="_blank"
                className={`transform transition-all duration-300 hover:scale-110 hover:-translate-y-1
                  ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link 
                href="https://x.com/HSoni98457" 
                target="_blank"
                className={`transform transition-all duration-300 hover:scale-110 hover:-translate-y-1
                  ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <RiTwitterXFill className="w-6 h-6" />
              </Link>
              
              <Link 
                href="https://www.linkedin.com/in/harsh-soni-hs/" 
                target="_blank"
                className={`transform transition-all duration-300 hover:scale-110 hover:-translate-y-1
                  ${theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 