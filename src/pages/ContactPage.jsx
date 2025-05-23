"use client"

import { useState } from "react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [expandedFaq, setExpandedFaq] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Message sent! (This is a demo)")
  }

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <div className="page-content container mx-auto px-4 py-6 md:py-10">
      <h1 className="section-heading">LET'S COLLABORATE! ✨</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        <div>
          <p className="text-base md:text-lg mb-4">Got a project in mind or just a question? Feel free to reach out!</p>
          <p className="text-base md:text-lg mb-4">
            For general inquiries, email me at{" "}
            <a href="mailto:vedantshinde.vs12@gmail.com" className="text-emerald-400">
              vedantshinde.vs12@gmail.com
            </a>
            . I'm always open to new opportunities and connections.
          </p>

          <div className="mt-6 md:mt-10 faq-container">
            <h2 className="faq-heading">FAQ</h2>

            <div className="space-y-2">
              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq("faq1")}>
                  <span>What types of projects do you take on?</span>
                  <span>
                    {expandedFaq === "faq1" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </span>
                </button>
                <div className={`faq-answer ${expandedFaq === "faq1" ? "expanded" : ""}`}>
                  <p>
                    I work on a variety of projects including software development, UI/UX design, and brand identity.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq("faq2")}>
                  <span>What's your process like?</span>
                  <span>
                    {expandedFaq === "faq2" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </span>
                </button>
                <div className={`faq-answer ${expandedFaq === "faq2" ? "expanded" : ""}`}>
                  <p>
                    My process typically involves an initial consultation to understand your needs, followed by
                    research, planning, design, development, testing, and deployment. I believe in regular communication
                    and feedback throughout the project.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq("faq3")}>
                  <span>Do you accept all projects?</span>
                  <span>
                    {expandedFaq === "faq3" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </span>
                </button>
                <div className={`faq-answer ${expandedFaq === "faq3" ? "expanded" : ""}`}>
                  <p>
                    I carefully evaluate each project to ensure it aligns with my skills and values. I prefer to work on
                    projects where I can add significant value and create meaningful experiences.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq("faq4")}>
                  <span>How long do projects take?</span>
                  <span>
                    {expandedFaq === "faq4" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </span>
                </button>
                <div className={`faq-answer ${expandedFaq === "faq4" ? "expanded" : ""}`}>
                  <p>
                    Project timelines and costs vary depending on complexity, scope, and requirements. I provide
                    detailed estimates after our initial consultation and understanding of your project needs.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq("faq5")}>
                  <span>How can people reach you?</span>
                  <span>
                    {expandedFaq === "faq5" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </span>
                </button>
                <div className={`faq-answer ${expandedFaq === "faq5" ? "expanded" : ""}`}>
                  <p>
                    You can reach me through the contact form on this page, via email at vedantshinde.vs12@gmail.com, or through
                    my social media profiles. I typically respond within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Jean D'eau"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="Let's work together"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="form-textarea"
                placeholder="Tell me about your project, needs, timeline, etc."
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
