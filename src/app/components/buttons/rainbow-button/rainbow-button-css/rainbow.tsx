'use client'

import React from 'react'
import { cn } from "@/lib/utils"

export function RainbowButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 
                     rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 
                     group-hover:duration-200 animate-gradient-x"></div>
      
      {/* Button */}
      <button
        className={cn(
          "relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600",
          "text-white font-medium",
          "transition-all duration-200",
          "hover:text-gray-100",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black",
          className
        )}
        {...props}
      >
        <span className="flex items-center space-x-2">
          {children || "Rainbow Button"}
        </span>
      </button>
    </div>
  )
} 