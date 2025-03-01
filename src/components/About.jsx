import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
          transition={fadeIn.transition}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          I'm a passionate full-stack developer with expertise in building modern web applications.
          My journey in tech has equipped me with a diverse skill set and a problem-solving mindset.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h3>
            <p className="text-gray-600 mb-4">
              I started my coding journey 5 years ago, and since then, I've been constantly learning and improving my skills.
              I've worked on various projects ranging from small business websites to complex web applications.
            </p>
            <p className="text-gray-600 mb-4">
              My experience includes working with startups and established companies, where I've contributed to building
              scalable and maintainable applications that solve real-world problems.
            </p>
            <p className="text-gray-600">
              I'm passionate about creating clean, efficient code and delivering exceptional user experiences.
              I believe in continuous learning and staying updated with the latest technologies and best practices.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What I Do</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaCode className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Frontend Development</h4>
                  <p className="text-gray-600">Building responsive and interactive user interfaces using modern frameworks like React.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaServer className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Backend Development</h4>
                  <p className="text-gray-600">Creating robust server-side applications and APIs using Node.js and Express.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaLaptopCode className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Full Stack Solutions</h4>
                  <p className="text-gray-600">Developing end-to-end applications with seamless integration between frontend and backend.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaMobileAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Responsive Design</h4>
                  <p className="text-gray-600">Creating websites that work flawlessly across all devices and screen sizes.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;