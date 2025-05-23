"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="navbar-container">
      <header className="flex items-center justify-between bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
        <Link to="/" className="text-xl md:text-2xl font-bold ml-4" onClick={closeMobileMenu}>
          hey?vedant
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden z-10" onClick={toggleMobileMenu} aria-label="Toggle menu">
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
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-3 mr-4">
          <Link
            to="/projects"
            className={`nav-button ${location.pathname.includes("/projects") ? "nav-button-projects" : "hover:bg-gray-800"}`}
          >
            PROJECTS
          </Link>
          <Link
            to="/about"
            className={`nav-button ${location.pathname.includes("/about") ? "nav-button-about" : "hover:bg-gray-800"}`}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={`nav-button ${location.pathname.includes("/contact") ? "nav-button-contact" : "hover:bg-gray-800"}`}
          >
            CONTACT & FAQ
          </Link>
        </nav>
      </header>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={closeMobileMenu}>
            ×
          </button>
          <nav className="mobile-menu-nav">
            <Link
              to="/"
              className={`mobile-menu-item ${location.pathname === "/" ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`mobile-menu-item ${location.pathname.includes("/about") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`mobile-menu-item ${location.pathname.includes("/projects") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`mobile-menu-item ${location.pathname.includes("/contact") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar
