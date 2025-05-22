"use client"

import { useState, useEffect } from "react"

const ScrollArrow = ({ targetId }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTarget = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div
      className="flex justify-center my-6 md:my-8 cursor-pointer animate-bounce"
      onClick={scrollToTarget}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="md:w-8 md:h-8"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  )
}

export default ScrollArrow
