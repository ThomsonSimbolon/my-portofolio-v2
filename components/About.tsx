export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background and what drives me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bio Card */}
          <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform animate-slide-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Who I Am</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a passionate developer who loves creating elegant solutions
              to complex problems. With a strong foundation in both frontend and
              backend development, I specialize in building modern web
              applications that provide exceptional user experiences.
            </p>
          </div>

          {/* Experience Card */}
          <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform animate-slide-up delay-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">My Journey</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Over the years, I&apos;ve worked on numerous projects ranging from
              small business websites to large-scale enterprise applications. I
              continuously learn and adapt to new technologies to stay at the
              forefront of web development.
            </p>
          </div>

          {/* Values Card */}
          <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform animate-slide-up delay-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-primary-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">My Values</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Quality, collaboration, and continuous improvement are at the core
              of everything I do. I believe in writing clean, maintainable code
              and creating solutions that truly make a difference.
            </p>
          </div>

          {/* Goals Card */}
          <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform animate-slide-up delay-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">My Goal</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              My goal is to leverage technology to create impactful solutions
              that improve people&apos;s lives. Whether it&apos;s through innovative web
              applications or collaborative team efforts, I&apos;m driven to make a
              positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
