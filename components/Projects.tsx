export default function Projects() {
  const projects = [
    {
      title: "Blog Management System",
      description:
        "A comprehensive content management system for creating, editing, and managing blog posts with rich text editor and category management.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      gradient: "from-primary-500 to-blue-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      ),
    },
    {
      title: "E-Learning Frontend",
      description:
        "An interactive online learning platform with course management, video streaming, real-time progress tracking, and a student dashboard, featuring a modern responsive interface.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      gradient: "from-accent-500 to-purple-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
    },
    {
      title: "Application AI Psychology",
      description:
        "An AI-powered psychological assessment application that provides mental health analysis and personalized recommendations using machine learning. ",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      gradient: "from-pink-500 to-rose-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
    },
    {
      title: "Modern Store",
      description:
        "A modern e-commerce platform with advanced product filtering, shopping cart, payment integration, and order management system. ",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      gradient: "from-primary-500 to-pink-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "Open AI Application",
      description:
        "An intelligent application leveraging OpenAI API for natural language processing, text generation, and conversational AI capabilities. ",
      technologies: ["React", "Node.js", "OpenAI API", "Express"],
      gradient: "from-accent-500 to-blue-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      ),
    },
    {
      title: "Chatbot AI",
      description:
        "An intelligent conversational chatbot with natural language understanding, context awareness, and multi-language support for customer service.",
      technologies: ["Python", "TensorFlow", "Flask", "WebSocket"],
      gradient: "from-primary-500 to-purple-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      ),
    },
    {
      title: "E-Course Application",
      description:
        "I have developed various websites using React + ViteJS and React Bootstrap. This e-learning platform offers comprehensive course management.",
      technologies: ["React", "ViteJS", "React Bootstrap"],
      gradient: "from-primary-500 to-blue-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
    },
    {
      title: "KMS Application",
      description:
        "I have developed various websites using HTML, CSS, JavaScript, CodeIgniter 4. The Knowledge Management System provides a centralized platform.",
      technologies: ["HTML", "CSS", "JavaScript", "CodeIgniter 4"],
      gradient: "from-accent-500 to-purple-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      title: "Public Complaint Application",
      description:
        "I have developed various websites using HTML, CSS, JavaScript, PHP, CodeIgniter. This public service platform enables citizens to submit, track, and manage complaints.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "CodeIgniter"],
      gradient: "from-pink-500 to-rose-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      title: "Movies Application",
      description:
        "I have developed various websites using ReactJS and Bootstrap. The movie database application provides comprehensive film information, user ratings, watchlists, and personalized.",
      technologies: ["ReactJS", "Bootstrap"],
      gradient: "from-primary-500 to-pink-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "SIMS Applications",
      description:
        "I have developed various websites using JavaScript, CodeIgniter 4 and JWT. The Student Information Management System streamlines academic operations with features for student enrollment.",
      technologies: ["JavaScript", "CodeIgniter 4", "JWT"],
      gradient: "from-accent-500 to-blue-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      title: "Go-Finance Application",
      description:
        "I have developed various websites using React + ViteJS, TailwindCSS and Rest API. This financial management application offers comprehensive budgeting tools, expense tracking, financial analytics, and transaction management.",
      technologies: ["React", "ViteJS", "TailwindCSS", "Rest API"],
      gradient: "from-primary-500 to-purple-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {project.icon}
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800/50 rounded-full text-sm text-primary-400 border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <button
                  className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg font-semibold hover:scale-105 transition-transform`}
                >
                  View Project
                </button>
                <button className="px-4 py-2 glass rounded-lg hover:scale-105 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
