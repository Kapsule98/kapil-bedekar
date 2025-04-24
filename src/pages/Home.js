import React from "react";
import Education from "../components/Education";
// import Skills from "../components/Skills";
import Skills from "../components/Abilities";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Row 1: Intro + Education side by side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left column: Intro */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm Kapil Bedekar
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
              I'm a software developer who loves building meaningful projects.
              This site showcases my work experience, personal projects, and some more info about me.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="/projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
              >
                View My Projects
              </a>
              <a
                href="/experience"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
              >
                View My Work Experience
              </a>
            </div>
          </div>

          {/* Right column: Education */}
          <div className="flex-1 w-full md:w-auto">
            <Education />
          </div>
        </div>

        {/* Row 2: Full-width Skills section */}
        <Skills />
      </div>
    </div>
  );
};

export default Home;
