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

    const smoothScroll = () => {
      targetY = window.scrollY
      currentY += (targetY - currentY) * smoothFactor

      container.style.transform = `translateY(-${currentY}px)`

      rafId = requestAnimationFrame(smoothScroll)
    }

    // Set body height to container height to allow scrolling
    const setBodyHeight = () => {
      document.body.style.height = `${container.getBoundingClientRect().height}px`
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
