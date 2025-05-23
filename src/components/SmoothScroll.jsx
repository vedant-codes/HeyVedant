"use client"

import { useEffect, useRef } from "react"

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Variables for smooth scrolling
    let currentY = window.scrollY
    let targetY = window.scrollY
    let rafId = null

    // Coefficient for smooth scrolling (lower = smoother)
    const smoothFactor = 0.1

    // Function to update scroll position with momentum
    const smoothScroll = () => {
      // Calculate the difference between current and target position
      const diff = targetY - currentY

      // If the difference is very small, just set to target
      if (Math.abs(diff) < 0.1) {
        currentY = targetY
      } else {
        // Apply easing for smooth momentum effect
        currentY += diff * smoothFactor
      }

      // Apply the scroll position
      window.scrollTo(0, currentY)

      // Continue animation
      rafId = requestAnimationFrame(smoothScroll)
    }

    // Start the smooth scroll animation
    rafId = requestAnimationFrame(smoothScroll)

    // Event listener for scroll events
    const handleScroll = () => {
      // Update target position when user scrolls
      targetY = window.scrollY
    }

    // Event listener for wheel events to update target position
    const handleWheel = (e) => {
      // Update target position based on wheel delta
      targetY += e.deltaY

      // Clamp target position to valid scroll range
      targetY = Math.max(0, Math.min(targetY, document.body.scrollHeight - window.innerHeight))
    }

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("wheel", handleWheel, { passive: true })

    // Cleanup function
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return <div ref={scrollRef}>{children}</div>
}

export default SmoothScroll
