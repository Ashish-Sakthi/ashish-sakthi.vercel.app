import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileDownload,
} from "react-icons/fa";

function Navbar() {
  const handleDownloadResume = () => {
    // TODO: Replace with actual resume download link
    const resumeUrl =
      "https://drive.google.com/file/d/1Q6ofTTIDY-am5FFVOsdErpj4zozTZ4h1/view?usp=sharing";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center bg-black text-white px-4 sm:px-12 lg:px-24 py-4 sm:py-6 font-montserrat">
      <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
        <Link
          to="/"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left">
            ASHISH SAKTHI D
          </h1>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-4 sm:space-x-6 lg:space-x-8">
        <a
          href="https://www.linkedin.com/in/iamashishsakthi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <FaLinkedin size={24} sm:size={28} lg:size={32} />
        </a>
        <a
          href="https://github.com/Ashish-Sakthi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <FaGithub size={24} sm:size={28} lg:size={32} />
        </a>
        {/* <a
          href="https://www.instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <FaInstagram size={24} sm:size={28} lg:size={32} />
        </a> */}
        <button
          onClick={handleDownloadResume}
          className="flex items-center bg-blue-800 hover:bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg transition-colors duration-300"
        >
          <FaFileDownload className="mr-2 sm:mr-3" size={16} sm:size={24} />
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
