import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="Contact" className="p-10 md:p-24 md:pt-10 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Contact Me</h1>
      {/* Flex Container for Social Links and Form */}
      <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
        {/* Left Section: Social Links */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Connect with me</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <FaGithub size={30} className="text-gray-500" />
              <a
                href="https://github.com/AnshikaaAgarwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-lg"
              >
                AnshikaaAgarwal
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin size={30} className="text-blue-600" />
              <a
                href="https://www.linkedin.com/in/anshika-agarwal-916117254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-lg"
              >
                Anshika Agarwal
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope size={30} className="text-red-500" />
              <a
                href="mailto:anshikaagarwal022@gmail.com"
                className="text-gray-300 hover:text-white text-lg"
              >
                Anshika Agarwal
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-2/3">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Send Me a Message</h2>
          <form
            action="https://formspree.io/f/xanybkrq"
            method="POST"
            className="flex flex-col gap-6"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#465697] hover:bg-blue-600 text-white py-3 rounded-md font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


