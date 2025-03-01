import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="home" smooth={true} duration={500}>
              <h2 className="text-2xl font-bold cursor-pointer">
                Abhishek<span className="text-blue-400">.dev</span>
              </h2>
            </Link>
            <p className="mt-4 text-gray-400">
              A passionate full-stack developer focused on creating clean, user-friendly experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="home" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Frontend Development</li>
              <li className="text-gray-400">Backend Development</li>
              <li className="text-gray-400">Responsive Design</li>
              <li className="text-gray-400">API Development</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">New Delhi, India</li>
              <li className="text-gray-400">contact@example.com</li>
              <li className="text-gray-400">+1 (234) 567-890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {new Date().getFullYear()} Abhishek Sawan. All rights reserved. Made with 
            <FaHeart className="text-red-500 mx-1" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;