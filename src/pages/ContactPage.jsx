"use client"

import { useState } from "react"
import toast from "react-hot-toast"

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const toastId = toast.loading("Sending your message...")

    try {
      const response = await fetch("https://formspree.io/f/mrbkbrdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Message sent successfully!", { id: toastId })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast.error("Something went wrong. Please try again later.", { id: toastId })
      }
    } catch (error) {
      toast.error("Failed to send message. Check your internet connection.", { id: toastId })
    }
  }

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <div className="page-content container mx-auto px-4 py-6 md:py-10">
      <h1 className="section-heading">LET'S COLLABORATE! ✨</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {/* Left Column - Info & FAQ */}
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
              {[
                {
                  id: "faq1",
                  question: "What types of projects do you take on?",
                  answer: "I work on a variety of projects including software development, UI/UX design, and brand identity.",
                },
                {
                  id: "faq2",
                  question: "What's your process like?",
                  answer:
                    "My process involves an initial consultation, then research, planning, design, development, testing, and deployment. Communication is key throughout.",
                },
                {
                  id: "faq3",
                  question: "Do you accept all projects?",
                  answer:
                    "I evaluate each project based on alignment with my skills and values. I focus on adding meaningful value.",
                },
                {
                  id: "faq4",
                  question: "How long do projects take?",
                  answer:
                    "Timelines and costs depend on complexity and scope. I give detailed estimates after understanding your needs.",
                },
                {
                  id: "faq5",
                  question: "How can people reach you?",
                  answer:
                    "You can reach me via this form, email (vedantshinde.vs12@gmail.com), or my social media. I reply in 24-48 hrs.",
                },
              ].map(({ id, question, answer }) => (
                <div className="faq-item" key={id}>
                  <button className="faq-question" onClick={() => toggleFaq(id)}>
                    <span>{question}</span>
                    <span>
                      {expandedFaq === id ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className={`faq-answer ${expandedFaq === id ? "expanded" : ""}`}>
                    <p>{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label">NAME</label>
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
                <label htmlFor="email" className="form-label">EMAIL</label>
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
              <label htmlFor="subject" className="form-label">SUBJECT</label>
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
              <label htmlFor="message" className="form-label">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="form-textarea"
                placeholder="Tell me about your project, needs, timeline, etc."
                required
              />
            </div>

            <button type="submit" className="form-submit flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
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
