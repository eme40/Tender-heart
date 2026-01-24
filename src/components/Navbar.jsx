import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Sun, Menu, X, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const navlinks = [
  { id: 1, name: 'Home', path: '/home' },
  { id: 2, name: 'About Us', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Gallery', path: '/media' },
  { id: 5, name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav
      className={`h-12 md:h-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled
          ? "bg-white dark:bg-gray-900 shadow-md text-black dark:text-white"
          : "bg-transparent text-white"
        }`}
    >
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='relative container mx-auto flex justify-between items-center h-full px-4 md:px-6 lg:px-8'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt='Logo' className='w-10' />
          <h4 className='font-semibold text-lg md:text-2xl'>Tender Heart</h4>
        </div>

        <div className='flex space-x-5 items-center'>
          {/* Desktop Nav */}
          <ul className='hidden md:flex gap-5'>
            {navlinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-textSecondary after:transition-all after:duration-200 hover:after:w-full after:w-0 hover:text-textSecondary ${
                      isActive ? 'after:w-full text-textSecondary' : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            <button onClick={toggleMobileMenu} className='p-2'>
              {isMobileMenuOpen ? (
                <X className='w-5 h-5 hover:scale-125 transition-all' />
              ) : (
                <Menu className='w-5 h-5 hover:scale-125 transition-all' />
              )}
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} aria-label='Toggle dark mode'>
            {darkMode ? (
              <Sun className='text-textSecondary h-4 w-4 cursor-pointer hover:scale-125' />
            ) : (
              <Moon className='text-textSecondary h-4 w-4 cursor-pointer hover:scale-125' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='absolute right-4 top-full mt-2 w-[calc(100%-2rem)] md:hidden z-50'>
            <div className='bg-white dark:bg-gray-800 text-black rounded-lg shadow-lg px-6 py-4'>
              <ul className='flex flex-col space-y-3'>
                {navlinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.path}
                      onClick={toggleMobileMenu}
                      className={({ isActive }) =>
                        `block py-2 text-center rounded hover:bg-gray-300 dark:hover:bg-gray-600 ${
                          isActive
                            ? 'text-textSecondary font-semibold'
                            : 'text-black dark:text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;

