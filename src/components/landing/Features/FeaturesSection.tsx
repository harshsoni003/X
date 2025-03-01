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

        {/* Updated Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex py-8">
            <motion.div 
              className="flex gap-8 animate-none"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              style={{
                width: "fit-content",
                willChange: "transform",
                padding: "8px 0"
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

          {/* Updated gradient masks to match new padding */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" 
            style={{ top: "-8px", bottom: "-8px", height: "calc(100% + 16px)" }} />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"
            style={{ top: "-8px", bottom: "-8px", height: "calc(100% + 16px)" }} />
        </div>
      </div>
    </div>
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

// Separate FeatureCard component for better organization
function FeatureCard({ feature, theme }: { feature: FeatureCard; theme: string }) {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl border backdrop-blur-sm w-[400px] h-[250px] flex-shrink-0 mb-4
        ${theme === 'dark' 
          ? 'border-gray-700 bg-gray-900/50 hover:bg-gray-900/70' 
          : 'border-gray-200 bg-white/50 hover:bg-white'}
        transition-all duration-300 hover:shadow-xl group`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {/* Feature Icon */}
        <div className={`p-4 rounded-xl inline-block mb-5
          ${theme === 'dark' 
            ? 'bg-gray-800 text-blue-400' 
            : 'bg-blue-50 text-blue-600'}`}>
          {feature.icon}
        </div>

        {/* Badge if exists */}
        {feature.badge && (
          <span className={`absolute top-0 right-0 text-sm px-3 py-1.5 rounded-full
            ${theme === 'dark' 
              ? 'bg-blue-900/50 text-blue-400' 
              : 'bg-blue-100 text-blue-600'}`}>
            {feature.badge}
          </span>
        )}

        {/* Title */}
        <h3 className={`text-2xl font-semibold mb-3
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {feature.title}
        </h3>

        {/* Description */}
        <p className={`text-lg
          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {feature.description}
        </p>
      </div>

      {/* Hover Effect Border - moved outside of group-hover for better effect */}
      <div className={`absolute inset-0 border border-transparent rounded-2xl transition-all duration-300
        ${theme === 'dark' 
          ? 'group-hover:border-blue-400/50' 
          : 'group-hover:border-blue-500/50'}`} 
      />
    </motion.div>
  )
} 