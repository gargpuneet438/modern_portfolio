import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg text-blue-600 font-semibold mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Puneet Garg
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-lg">
              I build exceptional and accessible digital experiences for the web.
              Passionate about creating solutions that are both beautiful and functional.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="projects" smooth={true} duration={500}>
                <button className="btn-primary w-full sm:w-auto">View My Work</button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn-secondary w-full sm:w-auto">Contact Me</button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600 bg-opacity-10 flex items-center justify-center">
                <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center">
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden border-4 border-white">
                    {/* Replace with your image */}
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                      Profile Image
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-blue-600 font-bold">5+ Years</div>
                <div className="text-gray-600 text-sm">Experience</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="text-blue-600 font-bold">50+</div>
                <div className="text-gray-600 text-sm">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;