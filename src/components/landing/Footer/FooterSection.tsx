'use client'

import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin,
  FaDiscord 
} from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import Image from 'next/image'

export default function FooterSection() {
  const { theme } = useTheme()

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Components', href: '#components' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Changelog', href: '#changelog' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Getting Started', href: '#start' },
      { name: 'Examples', href: '#examples' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
    ],
  }

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/harshsoni003', 
      hoverColor: 'hover:text-white',
      label: 'GitHub'
    },
    { 
      icon: RiTwitterXFill, 
      href: 'https://x.com/HSoni98457', 
      hoverColor: 'hover:text-white',
      label: 'Twitter'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/harsh-soni-hs/', 
      hoverColor: 'hover:text-blue-400',
      label: 'LinkedIn'
    },
    { 
      icon: FaDiscord, 
      href: 'https://discord.gg/yourusername', 
      hoverColor: 'hover:text-purple-400',
      label: 'Discord'
    },
  ]

  return (
    <footer className={`relative w-full mt-20 overflow-hidden
      ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50/50'}`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] opacity-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl animate-pulse" />
        </div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] opacity-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 blur-3xl animate-pulse" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section with Logo and Description */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h3 className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
              ${theme === 'dark' 
                ? 'from-blue-400 to-purple-500' 
                : 'from-blue-600 to-purple-700'}`}>
              InfinityUI
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`max-w-2xl text-center text-sm
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Building the future of web development, one component at a time.
            Modern tools for modern developers, designed to help you build
            better applications faster and more efficiently.
          </motion.p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className={`text-sm font-semibold uppercase tracking-wider
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className={`text-sm transition-all duration-200 hover:translate-x-1 inline-block
                        ${theme === 'dark' 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`border-t pt-8
          ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
            >
              © 2024 InfinityUI. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-6"
            >
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center gap-2 transition-all duration-300
                    ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                    ${social.hoverColor}`}
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className={`absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 text-xs rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100
                    ${theme === 'dark' 
                      ? 'bg-gray-800 text-gray-200' 
                      : 'bg-gray-200 text-gray-800'}`}>
                    {social.label}
                  </span>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
} 