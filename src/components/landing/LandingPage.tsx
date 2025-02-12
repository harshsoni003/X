'use client'

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

export default function LandingPage() {
  const router = useRouter()
  const { theme } = useTheme()

  return (
    <div className={`text-center min-h-screen flex flex-col justify-center items-center space-y-8 transition-colors duration-200 px-4
      ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="pt-20 sm:pt-32"></div>
      <div className="mb-8 sm:mb-12 animate-bounce">
      </div>
      
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-wide
        ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        InfinityX<br className="sm:hidden" /> Hub
      </h1>
      
      <p className={`text-base sm:text-lg mb-6 max-w-lg px-4 sm:px-0
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        Discover a collection of free templates, components, and comprehensive tutorials 
        to accelerate your web development journey. Built with modern technologies for modern developers.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
      
      <div className="flex space-x-6 mt-8">
        <FaReact size={24} className={`transition-colors duration-300 sm:text-3xl
          ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`} />
        <FaCode size={24} className={`transition-colors duration-300 sm:text-3xl
          ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`} />
        <FaPaintBrush size={24} className={`transition-colors duration-300 sm:text-3xl
          ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`} />
      </div>
      
      <hr className={`w-full max-w-4xl mx-4 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`} />

      {/* Founders Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 sm:mt-16 max-w-6xl px-4 space-y-8 lg:space-y-0">
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