export default function Education() {
  const educations = [
    {
      title: "S1 - Universitas Lancang Kuning",
      description: "Completed a bachelor's degree in Informatics Engineering",
      duration: "2020 ~ 2024",
      status: "Finished",
    },
    {
      title: "SMK N 1 MANDAU",
      description:
        "Obtained my vocational high school diploma in Electronics Engineering",
      duration: "2016 ~ 2019",
      status: "Finished",
    },
    {
      title: "SMP SWASTA JUDIKA",
      description:
        "Completed his first school education at Judika Private Junior High School.",
      duration: "2013 ~ 2016",
      status: "Finished",
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educations.map((education, idx) => (
            <div
              key={education.title}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform animate-slide-up flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Card Content */}
              <div className="p-8 flex-1">
                {/* Ikon Topi Toga */}
                <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14v7m0 0v-7m0 7H9m3 0h3"
                    />
                  </svg>
                </div>

                {/* Judul Institusi */}
                <h3 className="text-lg font-semibold text-white mb-4 text-center">
                  {education.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-gray-300 leading-relaxed mb-6 text-center">
                  {education.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="bg-[#3A0864] px-8 py-4 rounded-b-2xl space-y-3">
                {/* Durasi */}
                <div className="flex items-center gap-2 text-gray-200">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">
                    Duration: {education.duration}
                  </span>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 text-gray-200">
                  <svg
                    className="w-5 h-5"
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
                  <span className="text-sm">{education.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
