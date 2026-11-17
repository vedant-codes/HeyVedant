// Single source of truth for every project shown on the site.
// Add `imageUrl` / `additionalImages` (files in /public) when you have screenshots —
// until then the card renders a themed "terminal" visual built from `terminal`.
export const projects = [
  {
    id: "LegalMind",
    title: "LegalMind AI",
    period: "Jun 2025 – Jul 2025 · Adiasquare Software Solutions internship",
    tags: ["WEB DEVELOPMENT", "AI/ML", "NLP"],
    clientMessage:
      "Nobody reads a 40-page contract before signing it. Can AI read it for us?",
    replyMessage:
      "Done. It summarizes the document, flags risky clauses and explains the legalese in plain English.",
    imageUrl: "/lm1.png",
    additionalImages: ["/lm2.png", "/lm3.png", "/lm4.png", "/lm5.png", "/lm6.png"],
    githubUrl: "https://github.com/vedant-codes/LegalMindAi",
    websiteUrl: "https://legal-mind-ai-alpha.vercel.app/",
    stack: ["React", "FastAPI", "Hugging Face", "Tailwind CSS", "Agile / Git"],
    highlights: [
      "Built during my internship, covering requirement analysis through end-to-end design",
      "Summarizes contracts, classifies clauses and extracts names, dates, obligations and amounts",
      "Flags risky clauses, answers legal questions in context and suggests better wording",
      "Delivered in structured sprints using Agile methods and Git collaboration workflows",
    ],
    content:
      "LegalMind AI is an AI-based legal assistant I engineered as a Software Developer Intern at Adiasquare Software Solutions. It turns dense legal documents into clear, actionable insight so startups, freelancers and non-lawyers can review agreements faster and negotiate with confidence.",
  },
  {
    id: "Socratic",
    title: "Socratic AI",
    period: "Jan 2026 – May 2026",
    tags: ["LLM", "FINE-TUNING", "EDTECH", "REACT"],
    // Written as a Socratic exchange: the tutor answers with a question.
    clientMessage: "Just tell me how to solve this problem.",
    replyMessage: "What have you tried so far, and where did it stop making sense?",
    imageUrl: "/socratic1.webp",
    additionalImages: ["/socratic2.webp", "/socratic3.webp", "/socratic4.webp", "/socratic5.webp"],
    githubUrl: "https://github.com/vedant-codes/socratic-ai-tutor",
    websiteUrl: "https://socratic-ai-tutor-one.vercel.app",
    stack: ["LLaMA 3.1 8B", "LoRA / QLoRA", "Unsloth", "React", "FastAPI", "Supabase", "Ollama"],
    highlights: [
      "LLaMA 3.1 8B fine-tuned with LoRA/QLoRA on a curated Socratic dialogue dataset",
      "Multi-layer pipeline: intent detection, knowledge modeling, context-aware hints and response evaluation",
      "Guides learners through step-by-step reasoning instead of handing over answers",
      "Deployed with user authentication, session persistence and real-time personalized support",
    ],
    terminal: [
      "$ socratic --model llama3.1-8b-lora",
      "> intent: asking_for_answer",
      "> hint level: 1 (nudge, no solution)",
      "> tutor: what is the first thing you would try?",
      "> evaluating response... reasoning on track",
    ],
    content:
      "SocraticBot is an adaptive intelligent tutoring system. A fine-tuned LLaMA 3.1 8B sits behind a pipeline that detects what the student is really asking, models what they already know, and offers hints at the right level, then evaluates the reply before moving on. The result is a tutor that teaches you to think rather than just answering.",
  },
  {
    id: "Syntrix",
    title: "Syntrix",
    period: "Jun 2025 – Present",
    tags: ["AUTOMATION", "DEVOPS", "PYTHON", "ANSIBLE"],
    clientMessage:
      "Patching and onboarding our Linux and Windows machines by hand is eating our whole week.",
    replyMessage:
      "Then automate it all. One tool, 12+ playbooks, and every backup verified before you trust it.",
    imageUrl: "/syntrix1.webp",
    additionalImages: ["/syntrix2.webp", "/syntrix3.webp", "/syntrix4.webp"],
    githubUrl: "https://github.com/SahilMalawde-28/Syntrix",
    stack: ["Python", "Ansible", "SSH", "WinRM", "Linux", "Windows", "Docker", "React + Vite"],
    highlights: [
      "Cross-platform sysadmin tool managing Linux and Windows over SSH and WinRM",
      "12+ automated workflows: patching, software deployment, user management and compliance, as modular playbooks",
      "Real-time monitoring, automated backups with SHA-256 verification, and disaster recovery",
      "Minimizes manual intervention across the whole fleet",
    ],
    terminal: [
      "$ syntrix run patch --targets all",
      "[ssh]    linux-01 ... ok",
      "[winrm]  win-02   ... ok",
      "[backup] sha256 verified",
      "✔ 12 workflows ready · fleet healthy",
    ],
    content:
      "Syntrix is an infrastructure automation platform for system administrators. Built with Python and Ansible, it manages Linux and Windows machines over SSH and WinRM through modular playbooks covering patching, software deployment, user management and compliance. It also monitors in real time and runs automated backups verified with SHA-256, with disaster recovery built in.",
  },
  {
    id: "Zetros",
    title: "ZETROS",
    period: "Jan 2026 – Apr 2026",
    tags: ["CYBERSECURITY", "IOT", "BLOCKCHAIN", "ML"],
    clientMessage:
      "Someone cloned one of our sensors and our network trusted it. Passwords clearly aren't enough.",
    replyMessage:
      "Trust the hardware, not the password. The device fingerprint is checked, ML watches the traffic, and a smart contract blacklists bad nodes.",
    demo: "zetros", // terminal-only project: interactive simulation instead of screenshots
    githubUrl: "https://github.com/vedant-codes/ZETROS-Integrated-Framework",
    stack: ["Python", "Solidity", "Ethereum (Ganache)", "scikit-learn", "PUF", "RSA + AES-GCM"],
    highlights: [
      "PUF-based device authentication and cryptographic handshakes for secure onboarding",
      "Solidity smart contracts on Ethereum (Ganache) for decentralized trust and automated node blacklisting",
      "ML threat detection integrated with blockchain to isolate compromised nodes",
      "Removes single points of failure from the trust model",
    ],
    terminal: [
      "$ python3 -m server_hub.hub",
      "✅ [AUTH] device verified via PUF",
      "🚨 [ML ALERT] anomaly from 127.0.0.1",
      "⛓  [CONTRACT] node blacklisted on-chain",
      "🚫 [REPLAY] CONN1 blocked",
    ],
    content:
      "ZETROS is a zero-trust security framework for IoT networks. Devices prove who they are with Physical Unclonable Function fingerprints and a cryptographic handshake. An ML model watches their behavior, and when a node turns malicious, Solidity smart contracts on Ethereum blacklist it automatically, so no single point of failure decides who is trusted.",
  },
]

export const getProject = (id) => projects.find((p) => p.id === id)
