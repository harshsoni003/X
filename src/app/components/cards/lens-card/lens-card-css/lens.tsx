"use client"

import { AnimatePresence, motion, useMotionTemplate } from "framer-motion"
import React from "react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

interface Position {
  x: number
  y: number
}

interface LensProps {
  children: React.ReactNode
  zoomFactor?: number
  lensSize?: number
  position?: Position
  defaultPosition?: Position
  isStatic?: boolean
  duration?: number
  lensColor?: string
  ariaLabel?: string
}

export function Lens({
  children,
  zoomFactor = 1.3,
  lensSize = 170,
  isStatic = false,
  position = { x: 0, y: 0 },
  defaultPosition,
  duration = 0.1,
  lensColor = "black",
  ariaLabel = "Zoom Area",
}: LensProps) {
  if (zoomFactor < 1) {
    throw new Error("zoomFactor must be greater than 1")
  }
  if (lensSize < 0) {
    throw new Error("lensSize must be greater than 0")
  }

  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState<Position>(position)
  const containerRef = useRef<HTMLDivElement>(null)
  const [responsiveSize, setResponsiveSize] = useState(lensSize)
  const [responsiveZoom, setResponsiveZoom] = useState(zoomFactor)

  useEffect(() => {
    const updateResponsiveValues = () => {
      const width = window.innerWidth
      if (width < 480) { // Mobile phones
        setResponsiveSize(100)
        setResponsiveZoom(1.5)
      } else if (width < 768) { // Tablets
        setResponsiveSize(130)
        setResponsiveZoom(1.8)
      } else { // Desktop
        setResponsiveSize(lensSize)
        setResponsiveZoom(zoomFactor)
      }
    }

    updateResponsiveValues()
    window.addEventListener('resize', updateResponsiveValues)
    return () => window.removeEventListener('resize', updateResponsiveValues)
  }, [lensSize, zoomFactor])

  const currentPosition = useMemo(() => {
    if (isStatic) return position
    if (defaultPosition && !isHovering) return defaultPosition
    return mousePosition
  }, [isStatic, position, defaultPosition, isHovering, mousePosition])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    })
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    setIsHovering(true)
    handleTouchMove(e)
  }, [handleTouchMove])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setIsHovering(false)
  }, [])

  const maskImage = useMotionTemplate`radial-gradient(circle ${responsiveSize / 2}px at ${currentPosition.x}px ${currentPosition.y}px, ${lensColor} 100%, transparent 100%)`

  const LensContent = useMemo(() => {
    const { x, y } = currentPosition

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.58 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration }}
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          transformOrigin: `${x}px ${y}px`,
          zIndex: 50,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${responsiveZoom})`,
            transformOrigin: `${x}px ${y}px`,
          }}
        >
          {children}
        </div>
      </motion.div>
    )
  }, [currentPosition, responsiveSize, lensColor, responsiveZoom, children, duration])

  return (
    <div
      ref={containerRef}
      className="relative z-20 overflow-hidden rounded-xl touch-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsHovering(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {children}
      {isStatic || defaultPosition ? (
        LensContent
      ) : (
        <AnimatePresence mode="popLayout">{isHovering && LensContent}</AnimatePresence>
      )}
    </div>
  )
} 