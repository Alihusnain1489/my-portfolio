import React from "react";


import project1 from "/images/hero-dark.jpg";
import project2 from "/images/hero-dark.jpg";
import project3 from "/images/hero-dark.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive developer portfolio built using React and Tailwind CSS.",
    image: project1,
    link: "https://github.com/Alihusnain1489/portfolio",
  },
  {
    title: "Weather App",
    description: "A modern weather forecast app using OpenWeather API and React.",
    image: project2,
    link: "https://github.com/Alihusnain1489/weather-app",
  },
  {
    title: "E-commerce UI",
    description: "A clean UI for an e-commerce platform built with React components.",
    image: project3,
    link: "https://github.com/Alihusnain1489/ecommerce-ui",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">My Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
