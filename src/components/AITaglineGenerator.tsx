'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AITaglineGenerator = () => {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const taglines = [
    "Building Intelligent Systems that See, Think, and Act",
    "Transforming Data into Actionable AI Solutions",
    "Crafting the Future with Machine Learning Innovation",
    "Where Computer Vision Meets Real-World Impact",
    "Pioneering Next-Gen AI for Tomorrow's Challenges",
    "Bridging Human Intelligence with Artificial Minds",
    "Creating AI That Understands, Learns, and Evolves"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [taglines.length])

  return (
    <div className="h-16 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentTagline}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-lg md:text-xl lg:text-2xl text-center max-w-4xl"
          >
            <span className="text-gradient font-medium">
              {taglines[currentTagline]}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AITaglineGenerator
