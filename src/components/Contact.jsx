import React, { useState } from "react";
import Swal from "sweetalert2";

import whatsapp from "/images/whatsapp1.svg";
import Gmail from "/images/gmail.svg";
import linkedin from "/images/linkedin1.svg";
import github from "/images/GH.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "f576c5bd-042c-4484-b925-a8c5b0a47f2c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent.",
        icon: "success",
      });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-gray-800 py-16 px-6 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Get in Touch</h2>
          <p className="mb-6 text-gray-700">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="space-y-4 text-base">
            <div className="flex items-center">
              <img src={whatsapp} alt="WhatsApp" className="w-8 h-8 mr-4" />
              <span>+92 349 0470871</span>
            </div>
            <div className="flex items-center">
              <img src={Gmail} alt="Gmail" className="w-8 h-8 mr-4" />
              <span>mr.alihusnain11@gmail.com</span>
            </div>
            <div className="flex items-center">
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-4" />
              <a
                href="https://www.linkedin.com/in/alihusnain22376/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/alihusnain22376
              </a>
            </div>
            <div className="flex items-center">
              <img src={github} alt="GitHub" className="w-8 h-8 mr-4" />
              <a
                href="https://github.com/Alihusnain1489"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Alihusnain1489
              </a>
            </div>
          </div>
        </div>

        
        <form
          onSubmit={onSubmit}
          className="lg:w-1/2 w-full bg-gray-100 p-8 rounded-lg shadow-lg border border-blue-300"
        >
          <h3 className="text-3xl font-semibold text-blue-900 mb-6">Contact Me</h3>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message..."
              required
              className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
