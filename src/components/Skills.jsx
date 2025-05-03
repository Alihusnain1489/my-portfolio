import React from "react";

import html from "/images/icons8-html5-3.svg";
import css from "/images/icons8-css3-2.svg";
import js from "/images/icons8-javascript-2.svg";
import java from "/images/icons8-java-2.svg";
import mongodb from "/images/icons8-mongo-db-100.png";
import sql from "/images/icons8-mysql.svg";
import tailwind from "/images/icons8-tailwind-css.svg";
import springBoot from "/images/icons8-spring-boot-100.png";
import react from "../assets/react.svg";
import github from "/images/icons8-github-120.png";
import vscode from "/images/icons8-visual-studio-code-500.png";
import intellij from "/images/icons8-intellij-idea-500.png";
import eclipse from "/images/icons8-java-eclipse-80.png";
import postman from "/images/icons8-postman-inc-96.png";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: springBoot },
  { name: "MySQL", icon: sql },
  { name: "MongoDB", icon: mongodb },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "GitHub", icon: github },
  { name: "VS Code", icon: vscode },
  { name: "IntelliJ IDEA", icon: intellij },
  { name: "Eclipse", icon: eclipse },
  { name: "Postman", icon: postman },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen w-full py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-1xl md:text-3xl font-bold mb-12 text-blue-900">Skills & Tools</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl w-full justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-20 w-20 object-contain mb-2"
            />
            <span className="text-sm text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
