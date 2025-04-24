import React from "react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Flipkart",
    location: "Currently working from home (Office in Bangalore, India)",
    duration: "Mar 2021 - Present",
    logo: "/fk.jpg",
    description: [
      "Working as a software engineer in video commerce team, Building video based commerce platforms at scale",
      "live streaming platform",
      "audio video conferencing platform",
      "long-form/short form content platform)"
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Samsung Research Institute",
    location: "Delhi, India",
    duration: "Jan 2021 - Feb 2022",
    logo: "/samsung.jpg",
    description: [
      "VDBI - Data visualization and BI tool for managers to get information about Samsung smart TV usage and statistics",
      "SQL Builder - Easy to use interface for generating SQL Queries to get required data from Google Big Query", 
      "CP Portal - Platform for Samsung smart TV app publishers to view and analyze data related to app usage and app statistics"
],
  },
  {
    title: "Web development Intern",
    company: "Rx Health",
    location: "Remote",
    duration: "Aug 2020 - Dec 2020",
    logo: "/rxhealth.png",
    description: [
      "Contributed in developing a healthcare platform called telehealth which allowed healthcare professionals and patients to interact during the COVID-19 pandemic.",
      "Technologies used : Angular framework." ,
      "Developed an ios health app  with Apple healthkit integration using ionic framework." ,
      "Developed a database driven information sharing app for patients of colorectal  cancer and to raise general awareness."],
  },
  {
    title: "Intern Unity developer",
    company: "Anavi VR",
    location: "Chennai, India",
    duration: "Dec 2018 - Jan 2019",
    logo:"/anavi.png",
    description: [
      "Worked on developing a virtual reality data visualisation software for HTC Vive VR headset and X Box Kinect using Unity 3D"],
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Work Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            {experience.logo && (
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
              />
            )}
            <h3 className="text-2xl font-semibold text-gray-800">{experience.title}</h3>
            <p className="text-gray-600">{experience.company}</p>
            <p className="text-gray-500">{experience.location}</p>
            <p className="text-gray-500">{experience.duration}</p>
            <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
              {experience.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
