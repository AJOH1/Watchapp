"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left side */}
        <p className="text-sm">
          &copy; {currentYear} Cinematrix. All rights reserved.
        </p>

        {/* Center - Navigation links */}
        <div className="flex gap-4 text-sm">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right side - Social media */}
        <div className="flex gap-4">
          <a
            href="https://wa.me/message/26MINHOC42KDM1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
            className="hover:text-white transition-colors"
          >
            📲
          </a>
          <a
            href="https://github.com/AJOH1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            💻
          </a>
        </div>
      </div>
    </footer>
  );
}
