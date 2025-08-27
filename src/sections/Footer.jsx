import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Branding */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">
            AAA College of Engineering & Technology
          </h2>
          <p className="text-sm text-gray-400">
            Empowering Students • Inspiring Innovation
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#schedule" className="hover:text-white">Schedule</a>
          <a href="#events" className="hover:text-white">Events</a>
          <a href="#register" className="hover:text-white">Register</a>
        </div>

        {/* Right - Socials */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            🌐
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            🐦
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            📸
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AAA College of Engineering & Technology. All rights reserved.
        <p>Design & Devloped by:VimalRaj.R</p>
      </div>
    </footer>
  );
}

export default Footer;
