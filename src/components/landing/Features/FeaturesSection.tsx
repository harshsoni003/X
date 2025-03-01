'use client'

import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { FiPlus, FiZap, FiImage, FiCode, FiLayout, FiBox } from 'react-icons/fi'

interface FeatureCard {
  icon: JSX.Element
  title: string
  description: string
  badge?: string
}

const features: FeatureCard[] = [
  {
    icon: <FiPlus className="w-6 h-6" />,
    title: "Add New Components",
    description: "Create UI components by describing what you need. Magic generates production-ready code instantly."
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "Enhance Existing UI",
    description: "Improve components with advanced features and animations. Upgrade without starting from scratch.",
    badge: "Soon"
  },
  {
    icon: <FiImage className="w-6 h-6" />,
    title: "Access Logo Library",
    description: "Integrate company logos and icons via SVGL. Access a vast collection of professional brand assets.",
    badge: "SVGL Integration"
  }
]

export default function FeaturesSection() {
  const { theme } = useTheme()

  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent 
              ${theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
                : 'bg-gradient-to-r from-blue-600 to-purple-700'}`}
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-xl md:text-2xl
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Everything you need to build modern UI components
          </motion.p>
        </div>

        {/* Features container with continuous scroll */}
        <div className="relative overflow-hidden">
          <div className="flex py-4">
            <motion.div 
              className="flex gap-6"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              style={{
                width: "fit-content",
                willChange: "transform"
              }}
            >
              {/* First set of features */}
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} theme={theme} />
              ))}
              {/* Second set of features for seamless loop */}
              {features.map((feature, index) => (
                <FeatureCard key={`duplicate-${index}`} feature={feature} theme={theme} />
              ))}
            </motion.div>
          </div>
            
          {/* Gradient masks */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

// Update FeatureCard to be responsive
function FeatureCard({ feature, theme }: { feature: FeatureCard; theme: string }) {
  return (
    <motion.div
      className={`relative p-6 rounded-xl border w-[280px] sm:w-[320px] lg:w-[350px] flex-shrink-0
        ${theme === 'dark' 
          ? 'border-gray-700 bg-gray-900/50 hover:bg-gray-900/70' 
          : 'border-gray-200 bg-white/50 hover:bg-white'}
        transition-all duration-300`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative">
        {/* Feature Icon */}
        <div className={`p-3 sm:p-4 rounded-xl inline-block mb-4 sm:mb-5
          ${theme === 'dark' 
            ? 'bg-gray-800 text-blue-400' 
            : 'bg-blue-50 text-blue-600'}`}>
          <div className="w-5 h-5 sm:w-6 sm:h-6">
            {feature.icon}
          </div>
        </div>

        {/* Badge if exists */}
        {feature.badge && (
          <span className={`absolute top-0 right-0 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full
            ${theme === 'dark' 
              ? 'bg-blue-900/50 text-blue-400' 
              : 'bg-blue-100 text-blue-600'}`}>
            {feature.badge}
          </span>
        )}

        {/* Title */}
        <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {feature.title}
        </h3>

        {/* Description */}
        <p className={`text-sm sm:text-base line-clamp-3
          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

// Add this to your global CSS or style definition
const styles = `
@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotate {
  0% { --gradient-angle: 0deg; }
  100% { --gradient-angle: 360deg; }
}
` 