import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiRedux } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" /> },
    { name: 'React', icon: <FaReact className="text-4xl text-blue-400" /> },
    { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-600" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-black" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: 'Express', icon: <SiExpress className="text-4xl text-gray-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-500" /> },
    { name: 'SQL', icon: <FaDatabase className="text-4xl text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-600" /> },
    { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-600" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I've worked with a variety of technologies in the web development world.
          Here are the main skills and technologies I use to bring projects to life.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
              variants={item}
            >
              {skill.icon}
              <h3 className="mt-4 text-gray-800 font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;