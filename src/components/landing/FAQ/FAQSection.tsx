'use client'

import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is InfinityUI?",
    answer: "InfinityUI is a comprehensive UI component library and template system that helps developers build modern web applications faster. It includes pre-built components, templates, and tools optimized for React, Next.js, and TypeScript projects."
  },
  {
    question: "How do I get started with InfinityUI?",
    answer: "Getting started is simple! Browse our collection of components and templates, choose the ones you need, and integrate them into your project. Our components are well-documented with copy-paste ready code and customization options."
  },
  {
    question: "Are the components customizable?",
    answer: "Absolutely! All components are built with Tailwind CSS and are fully customizable. You can modify colors, spacing, animations, and functionality to match your brand and requirements. The source code is clean and well-structured for easy modifications."
  },
  {
    question: "Do you offer dark mode support?",
    answer: "Yes! All our components come with built-in dark mode support. They seamlessly integrate with our ThemeContext system, allowing you to switch between light and dark themes with zero additional configuration."
  },
  {
    question: "What tech stack do you support?",
    answer: "Our components are optimized for React, Next.js, TypeScript, and Tailwind CSS. We also provide integration support for popular backends like Supabase and MongoDB, making it easy to build full-stack applications."
  },
  {
    question: "Do you offer support?",
    answer: "Yes! We provide comprehensive documentation, integration guides, and community support. For premium users, we offer priority support and direct assistance with component customization and integration."
  }
]

export default function FAQSection() {
  const { theme } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className={`text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent 
          ${theme === 'dark' 
            ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
            : 'bg-gradient-to-r from-blue-600 to-purple-700'}`}>
          Frequently Asked Questions
        </h2>
        <p className={`text-lg
          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Everything you need to know about InfinityUI
        </p>
      </div>

      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300
              ${theme === 'dark' 
                ? 'border-gray-700 bg-gray-900/50 hover:bg-gray-900' 
                : 'border-gray-200 bg-white hover:bg-gray-50'}`}
          >
            <button
              className={`w-full px-6 py-5 text-left flex justify-between items-center
                ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiChevronDown className="w-5 h-5 flex-shrink-0" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`px-6 pb-5
                    ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  <p className="text-base leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 