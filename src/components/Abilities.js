import React from "react";
import {
  BarChart, Layers, Database, ServerCog, TerminalSquare,
  Hammer, Eye, MonitorSmartphone, Gamepad2, Book
} from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: <TerminalSquare className="w-5 h-5 mr-2 text-blue-700" />,
      items: ["Java", "C++", "Python", "C", "JavaScript", "C#"],
    },
    {
      title: "Frontend Frameworks",
      icon: <MonitorSmartphone className="w-5 h-5 mr-2 text-green-700" />,
      items: ["React", "Vuejs"],
    },
    {
      title: "Backend Frameworks",
      icon: <ServerCog className="w-5 h-5 mr-2 text-orange-700" />,
      items: ["Dropwizard", "Micronaut", "Flask"],
    },
    {
      title: "Databases & Cache",
      icon: <Database className="w-5 h-5 mr-2 text-purple-700" />,
      items: ["MySQL", "MongoDB", "Redis", "Aerospike"],
    },
    {
      title: "Messaging & Streaming",
      icon: <Layers className="w-5 h-5 mr-2 text-red-600" />,
      items: ["Kafka", "Zookeeper", "Apache Avro"],
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Hammer className="w-5 h-5 mr-2 text-yellow-700" />,
      items: ["Docker", "Containerization", "Terraform", "Ansible"],
    },
    {
      title: "Observability",
      icon: <Eye className="w-5 h-5 mr-2 text-teal-600" />,
      items: ["Prometheus", "Grafana"],
    },
    {
        title: "SDLC and documentation",
        icon: <Book className="w-5 h-5 mr-2 text-blue-200" />,
        items: ["Git", "confluence", "Jira", "UML"]
    },
    {
        title: "Performance tuning and load tests",
        icon: <BarChart className="w-5 h-5 mr-2 text-red-400"/>,
        items: ["Locust", "jconsole", "selenium grid", "jitsi meet torture"]
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="w-5 h-5 mr-2 text-pink-600" />,
      items: ["Unity3D"],
    }
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Skills & Technologies
      </h2>
      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex items-center mb-2">
              {category.icon}
              <h3 className="text-lg font-medium text-gray-700">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
