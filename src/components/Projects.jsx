import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Project',
      github: 'https://github.com/',
      live: 'https://example.com/'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with real-time updates and team collaboration features.',
      technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
      github: 'https://github.com/',
      live: 'https://example.com/'
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media accounts, providing insights and statistics on engagement and audience growth.',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'API Integration'],
      image: 'https://via.placeholder.com/600x400?text=Social+Media+Dashboard',
      github: 'https://github.com/',
      live: 'https://example.com/'
    },
    {
      title: 'Real Estate Listing Platform',
      description: 'A platform for property listings with search functionality, filtering options, and interactive maps for location-based searches.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
      image: 'https://via.placeholder.com/600x400?text=Real+Estate+Platform',
      github: 'https://github.com/',
      live: 'https://example.com/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the projects I've worked on. Each project represents different challenges and solutions.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            See More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;