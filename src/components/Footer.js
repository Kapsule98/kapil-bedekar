import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Social Links */}
        <div className="mb-6">
          <a
            href="https://github.com/Kapsule98"
            className="mx-4 text-gray-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kapil-bedekar/"
            className="mx-4 text-gray-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/KapilBedekar6"
            className="mx-4 text-gray-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://codeforces.com/profile/kapsulator"
            className="mx-4 text-gray-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codeforces
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
           {new Date().getFullYear()} Created by me.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
