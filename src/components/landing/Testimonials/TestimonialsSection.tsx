'use client'

import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { RiTwitterXFill } from 'react-icons/ri'

interface Testimonial {
  author: string
  handle: string
  content: string
  avatar: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    author: "Sarah Chen",
    handle: "@PratikKadam_",
    content: "InfinityUI has revolutionized my development workflow. The AI-powered components are incredibly intuitive and save me countless hours. A true game-changer for modern web development! 🚀",
    avatar: "/images/pratik.jpg",
    date: "March 15, 2024"
  },
  {
    author: "Alex Rivera",
    handle: "@PratikKadam_",
    content: "Been exploring InfinityUI for a month now and I'm amazed. The component library is extensive, the code is clean, and the customization options are fantastic. This is next-level UI development! ✨",
    avatar: "/images/pratik.jpg",
    date: "March 12, 2024"
  },
  {
    author: "Mike Johnson",
    handle: "@PratikKadam_",
    content: "The SVGL integration in InfinityUI is pure genius! Having instant access to a professional logo library and being able to customize on the fly has streamlined our design process. Excellent work! 💯",
    avatar: "/images/pratik.jpg",
    date: "March 10, 2024"
  },
  {
    author: "Emma Wilson",
    handle: "@PratikKadam_",
    content: "InfinityUI's enhancement features are outstanding. The intelligent suggestions and seamless component integration make it feel like having a senior UI engineer on the team. Essential for modern projects! 🎨",
    avatar: "/images/pratik.jpg",
    date: "March 8, 2024"
  }
]

export default function TestimonialsSection() {
  const { theme } = useTheme()

  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent 
              ${theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-400 to-purple-500' 
                : 'bg-gradient-to-r from-blue-600 to-purple-700'}`}
          >
            Loved by Developers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-xl md:text-2xl
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            See what others are saying about Infinity UI
          </motion.p>
        </div>

        {/* Testimonials container with continuous scroll */}
        <div className="relative overflow-hidden">
          <div className="flex py-4">
            <motion.div 
              className="flex gap-6"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              style={{
                width: "fit-content",
                willChange: "transform"
              }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} theme={theme} />
              ))}
              {/* Second set of testimonials for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} theme={theme} />
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

// Update TestimonialCard to be responsive
function TestimonialCard({ testimonial, theme }: { testimonial: Testimonial; theme: string }) {
  return (
    <motion.div
      className={`relative p-6 rounded-xl border w-[280px] sm:w-[320px] lg:w-[350px] flex-shrink-0
        ${theme === 'dark' 
          ? 'border-gray-700 bg-gray-900/50 hover:bg-gray-900/70' 
          : 'border-gray-200 bg-white/50 hover:bg-white'}
        transition-all duration-300`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Author Info */}
          <div>
            <h3 className={`font-semibold text-sm sm:text-base
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {testimonial.author}
            </h3>
            <p className={`text-xs sm:text-sm
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {testimonial.handle}
            </p>
          </div>
        </div>

        {/* X (formerly Twitter) Icon */}
        <RiTwitterXFill className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`} />
      </div>

      {/* Content */}
      <p className={`text-sm sm:text-base mb-3 line-clamp-4
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        {testimonial.content}
      </p>

      {/* Date */}
      <p className={`text-xs sm:text-sm
        ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
        {testimonial.date}
      </p>
    </motion.div>
  )
} 