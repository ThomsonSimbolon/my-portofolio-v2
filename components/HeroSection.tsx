"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && index < fullText.length) {
      // Mengetik teks
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && index === fullText.length) {
      // Menunggu setelah selesai mengetik
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && text.length > 0) {
      // Menghapus teks
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && text.length === 0) {
      // Reset untuk mengulang
      setIsDeleting(false);
      setIndex(0);
    }
  }, [index, isDeleting, text, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background with geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large geometric shape - top right */}
        <div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] opacity-30"
          style={{
            background: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
            clipPath: "polygon(30% 0%, 100% 0%, 100% 70%, 60% 100%)",
            animation: "float 8s ease-in-out infinite",
          }}
        ></div>

        {/* Medium geometric shape - left side */}
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] opacity-25"
          style={{
            background: "linear-gradient(225deg, #d946ef 0%, #c026d3 100%)",
            clipPath: "polygon(0% 20%, 80% 0%, 100% 60%, 20% 100%)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        ></div>

        {/* Accent shape - bottom right */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20"
          style={{
            background: "linear-gradient(45deg, #e879f9 0%, #38bdf8 100%)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animation: "float 12s ease-in-out infinite",
          }}
        ></div>

        {/* Pulsing orbs for depth */}
        <div className="absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-accent-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <p className="text-primary-400 text-lg mb-4 font-semibold">
              👋 Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Thomson</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-6 h-12">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              I craft beautiful, functional, and user-friendly web applications
              that solve real-world problems. Let&apos;s build something amazing
              together!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-primary-500/50"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Geometric background shape behind profile */}
              <div className="absolute inset-0 -z-10">
                {/* Large curved shape - similar to reference image */}
                <div
                  className="absolute -left-32 -top-16 w-[500px] h-[500px] md:w-[600px] md:h-[600px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
                    clipPath:
                      "polygon(25% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    opacity: 0.4,
                  }}
                ></div>

                {/* Secondary accent shape */}
                <div
                  className="absolute -right-20 top-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                  style={{
                    background:
                      "linear-gradient(225deg, #d946ef 0%, #c026d3 100%)",
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    opacity: 0.3,
                  }}
                ></div>
              </div>

              {/* Profile image with gradient border - not circular */}
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl bg-gradient-to-br from-primary-500 via-accent-500 to-pink-500 p-1 relative z-10 shadow-2xl">
                <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center overflow-hidden">
                  {/* Profile Image */}
                  <Image
                    src="/images/Hero-Profile.png"
                    alt="Profile Picture"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-500/30 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
