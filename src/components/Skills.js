import React from "react";

const Skills = () => {
  const skills = [
    "Java", "C++", "Python", "C", "JavaScript", "React", "Vuejs", "Dropwizard", "Micronaut", "Flask","MySQL","MongoDB",
    "Redis","Aerospike","Kafka","Zookeeper", "Apache Avro" ,"Containerization and Docker", "Terraform", "Ansible","Git", "Prometheus", "Grafana","Unity3D", "C#"
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills/ Technologies/ Frameworks I know and have used</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
