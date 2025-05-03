import React from "react";

// Import local icons
import githubIcon from "/images/GH.svg";
import linkedinIcon from "/images/linkedin.svg";


const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Ali Husnain</h3>
            <p className="text-gray-400">
              Front-end Developer based in Lahore, Pakistan. I specialize in creating modern, scalable web and software solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
             
            </ul>
          </div>

         
          <div>
            <h4 className="text-xl font-semibold mb-3">Follow Me</h4>
            <div className="flex space-x-4 items-center">
              <a href="https://github.com/Alihusnain1489/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={githubIcon} alt="GitHub" className="w-6 h-6 hover:opacity-80 transition" />
              </a>
              <a href="https://www.linkedin.com/in/alihusnain22376/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ali Husnain. All rights reserved.</p>
          <p>Made with ❤️ in Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
