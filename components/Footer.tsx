export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear}{" "}
              <span className="gradient-text font-semibold">Thomson</span>. All
              rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
              <p className="text-gray-500 text-sm">
            Build with using Next.js & TailwindCSS
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
