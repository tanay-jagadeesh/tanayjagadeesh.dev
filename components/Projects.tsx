'use client';

const projects = [
  {
    title: "Signature Forgery Detection",
    description: "Deep learning system for detecting forged signatures using convolutional neural networks.",
    tech: ["Python", "PyTorch", "torchvision", "CNN", "scikit-learn", "matplotlib"],
    github: "https://github.com/tanay-jagadeesh/signature-forge-or-not",
    highlights: [
      "Convolutional neural network architecture",
      "Deep learning-based forgery detection",
      "Computer vision techniques"
    ]
  },
  {
    title: "Stock Market News & Sentiment Analyzer",
    description: "A comprehensive API built with yfinance and FastAPI that aggregates stock market news and performs sentiment analysis to help investors make data-driven decisions.",
    tech: ["Python", "FastAPI", "yfinance", "NLP", "Sentiment Analysis"],
    github: "https://github.com/tanay-jagadeesh/yfinance_newsapi-stock-sentiment-analyzer",
    highlights: [
      "Real-time stock news aggregation",
      "ML-powered sentiment analysis",
      "RESTful API with FastAPI"
    ]
  },
  {
    title: "Turtle Crossing Game",
    description: "An interactive game built with Python's Turtle graphics, demonstrating object-oriented programming and game development fundamentals.",
    tech: ["Python", "Turtle Graphics", "OOP"],
    github: "https://github.com/tanay-jagadeesh/turtle-crossing-game",
    highlights: [
      "Object-oriented design",
      "Collision detection",
      "Progressive difficulty"
    ]
  },
  {
    title: "Merge Mail Automation",
    description: "An automation tool for personalized bulk email campaigns with dynamic content merging and template management.",
    tech: ["Python", "Email Automation", "Data Processing"],
    github: "https://github.com/tanay-jagadeesh/merge-mail",
    highlights: [
      "Automated email workflows",
      "Template customization",
      "Bulk processing capabilities"
    ]
  },
  {
    title: "US States Quiz",
    description: "An educational quiz application to test knowledge of US geography, built with interactive features and scoring systems.",
    tech: ["Python", "Turtle Graphics", "Data Visualization"],
    github: "https://github.com/tanay-jagadeesh/us-states-quiz",
    highlights: [
      "Interactive learning tool",
      "Score tracking",
      "Visual feedback system"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-blue-900/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Featured Projects
        </h2>

        {/* Featured Projects - 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* CodeClash */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">codeclash</h3>
                <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                  ✨ shipped
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://leetcode-competition.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-300">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/tanay-jagadeesh/leetcode-competition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-purple-300">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              real-time 1v1 coding competition platform where developers race to solve algorithmic problems. built with instant matching, live opponent status, and ai-powered hints. reached 100+ users in 2 hours after launch. fully deployed and shipping.
            </p>
            <div className="mb-4 rounded-lg overflow-hidden border border-purple-500/20">
              <video 
                className="w-full h-auto" 
                autoPlay 
                muted 
                loop 
                playsInline 
                controls 
                preload="auto"
              >
                <source src="/videos/11.01.2026_14.45.11_REC.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "WebSockets", "Real-time", "Vercel", "Tailwind CSS", "AI Integration"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CORTEX */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">CORTEX</h3>
                <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300">
                  🏆 1st Place
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-2 text-sm">
              <span className="font-semibold text-yellow-400">Awarded 1st Place Overall</span> at Canada's largest Data Science hackathon ($1,000 prize, 300+ hackers, 80+ teams)
            </p>
            <p className="text-gray-300 mb-4 text-sm">
              Full-stack 3D semantic memory system that parses ChatGPT/Claude exports, generates embeddings via Ollama, reduces dimensions with UMAP, and renders interactive Three.js visualizations. Engineered FastAPI backend with 10 REST endpoints and 7-stage ML pipeline. Implemented MCP server enabling Claude Desktop to query past conversations.
            </p>
            <div className="mb-4 rounded-lg overflow-hidden border border-purple-500/20 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SC_lDydnCF4"
                title="CORTEX - AI Chat Memory Visualization System"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "Three.js", "Ollama", "MCP", "UMAP", "Vector Search", "K-means"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>View on GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/tanay-jagadeesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
