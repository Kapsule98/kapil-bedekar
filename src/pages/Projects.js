import React from "react";

const projects = [
  {
    title: "Shrinkin Shapes",
    description: "A 2D game made using Unity",
    link: "https://github.com/Kapsule98/Shrinking-Shapes/tree/master",
  },
  {
    title: "Keep the ball",
    description: "retro pong inspired 4 player local multiplayer game",
    link: "https://github.com/Kapsule98/KeepTheBall/tree/master",
  },
  {
    title: "PredictSports",
    description: "Web app where users can predict outcome of football matches and get points and compete against other users on leaderboard",
    link: "https://github.com/Kapsule98/PredictSports.git",
  },
  {
    title: "Lemmebuy",
    description: "A common Platform for sellers and customers where sellers can publish information about their store and offers given by them and customers to browse through different stores and offers and redeem those offers to get the best price for the item they want to buy Ui(https://github.com/Kapsule98/EarnIT)",
    link: "https://github.com/Kapsule98/earnit-backend",
  },
  {
    title: "Cryptonet",
    description: "Made a website that displays realtime information about different cryptocurrencies. UI (https://github.com/Kapsule98/CryptoInfo)",
    link: "https://github.com/Kapsule98/cryptoinfoAPI",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
