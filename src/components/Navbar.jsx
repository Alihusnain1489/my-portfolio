import React from 'react'
import HeroImage from '../assets/ali.jpg'

function Navbar() {
  return (
    <>
      <div
        id='home'
        className="text-black text-center px-4 py-16 bg-[url('/images/hero-light.jpg')] bg-no-repeat bg-cover bg-center w-full min-h-screen flex flex-col justify-center items-center"
      >
        <img
          src={HeroImage}
          alt="Ali Husnain"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-50 lg:h-50 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-6">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
            Ali Husnain
          </span>
          , Full Stack Developer
        </h1>

        <div className="mt-6 sm:mt-8 space-x-4">
          <a
            href="https://dochub.com/m/shared-document/mr-alihusnain11/DL7JlEGV1mm6O6dVrWe0oa/ali-husnain-cv-pdf?dt=xTgrdD-9qdUKf8SVF9Jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full text-sm sm:text-base"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar

