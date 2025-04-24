import React from "react";

const Education = () => {
  const educationData = [
    { school: "B.Tech Information Technology, NIT Raipur", year: "2016 - 2020", grade: "8.96 CPI" },
    { school: "Class 12 - DPS, Bhilai", year: "2016", grade: "92.4%" },
    { school: "Class 10 - DPS, Bhilai", year: "2014", grade: "10 CGPA" },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">School / College</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{edu.school}</td>
                <td className="border border-gray-300 px-4 py-2">{edu.year}</td>
                <td className="border border-gray-300 px-4 py-2">{edu.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
