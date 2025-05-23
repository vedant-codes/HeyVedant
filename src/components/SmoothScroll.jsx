"use client"

import { useEffect, useRef } from "react"

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const container = containerRef.current
    let currentY = 0
    let targetY = 0
    let rafId = null
    const smoothFactor = 0.1

    const setBodyHeight = () => {
      if (!container) return
      // Always set body height to container height so scroll works
      document.body.style.height = `${container.getBoundingClientRect().height}px`
    }

    const smoothScroll = () => {
      targetY = window.scrollY
      const maxScroll = container.scrollHeight - window.innerHeight

      // Clamp targetY to maxScroll (prevent overscroll)
      targetY = Math.min(targetY, maxScroll)

      // Smoothly approach targetY
      currentY += (targetY - currentY) * smoothFactor

      // Clamp currentY to maxScroll for safety
      currentY = Math.min(currentY, maxScroll)

      container.style.transform = `translateY(-${currentY}px)`

      // Update body height every frame in case content changes dynamically
      setBodyHeight()

      rafId = requestAnimationFrame(smoothScroll)
    }

    setBodyHeight()
    window.addEventListener("resize", setBodyHeight)

    rafId = requestAnimationFrame(smoothScroll)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", setBodyHeight)
      document.body.style.height = "auto"
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}

export default SmoothScroll
