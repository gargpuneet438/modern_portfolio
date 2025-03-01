import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500}>
          <h1 className="text-2xl font-bold cursor-pointer text-blue-600">
            Abhishek<span className="text-gray-800">.dev</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ id, text }) => (
            <li key={id} className="group">
              <Link
                to={id}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-300"
              >
                {text}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50" onClick={handleClick}>
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        <motion.ul
          className={`${
            nav ? 'flex' : 'hidden'
          } md:hidden flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white`}
          initial={{ opacity: 0 }}
          animate={{ opacity: nav ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map(({ id, text }) => (
            <li key={id} className="py-4">
              <Link
                onClick={closeMenu}
                to={id}
                smooth={true}
                duration={500}
                className="text-2xl text-gray-800 hover:text-blue-600 cursor-pointer font-medium"
              >
                {text}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;