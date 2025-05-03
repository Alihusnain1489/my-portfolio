import React from "react";
import icon from "/images/about-image.png";

function About() {
  return (
    <div
      className="min-h-screen  flex flex-col justify-center items-center px-6 py-16"
      id="about"
    >
      <h2 className="text-1xl md:text-3xl font-bold mb-6 text-blue-900">About Me</h2>
      <p className="text-lg md:text-xl font-light mb-12 max-w-3xl text-center">
        I'm a Full Stack Developer with a passion for creating intuitive and responsive web
        experiences. From building pixel-perfect interfaces to writing efficient back-end logic,
        I love crafting seamless digital solutions.
      </p>

      <div className="flex flex-col-reverse md:flex-row gap-10 items-center w-full max-w-5xl">
        
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-xl md:text-xl font-light leading-relaxed">
            With expertise in modern technologies like React, Spring Boot, and Tailwind CSS, I build
            scalable and maintainable applications. Whether you're starting a new project or
            optimizing an existing one, I'm ready to help bring your ideas to life.
          </p>

          
          <div className="flex gap-5 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/Alihusnain1489"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400 hover:text-blue-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alihusnain22376"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400 hover:text-blue-600"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mr.alihusnain11@gmail.com"
              className="hover:underline text-blue-400 hover:text-blue-600"
            >
              Email
            </a>
          </div>
        </div>

       
        <div className="md:w-1/2 flex justify-center">
          <img
            src={icon}
            alt="About me"
            className="rounded shadow-lg w-72 h-72 md:w-80 md:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

