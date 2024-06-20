import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import IDALogo from '../assets/IDALogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-start">
          <img src={IDALogo} alt="Logo" className="h-12 w-14 mx-auto" />
        </div>
        <div className="hidden lg:flex space-x-8">
          <Link to="home" smooth={true} className="cursor-pointer text-md align-center hover:text-sm transition duration-100 ease-in-out">Home</Link>
          <Link to="about" smooth={true} className="cursor-pointer text-md hover:text-sm transition duration-100 ease-in-out">About</Link>
          <Link to="services" smooth={true} className="cursor-pointer text-md hover:text-sm transition duration-100 ease-in-out">Services</Link>
          <Link to="projects" smooth={true} className="cursor-pointer text-md hover:text-sm transition duration-100 ease-in-out">Projects</Link>
          <Link to="careers" smooth={true} className="cursor-pointer text-md hover:text-sm transition duration-100 ease-in-out">Careers</Link>
          <Link to="contact" smooth={true} className="cursor-pointer">
            <a href="#contact-us" className="inline-block px-2 py-0.5 bg-indigo-900 text-white font-medium rounded-md hover:text-sm transition duration-100 ease-in-out">
              Contact Us
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sm transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sm transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faXTwitter} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sm transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faFacebook} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sm transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
          </a>
        </div>
        <div className="lg:hidden flex justify-end mr-12">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-sm transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faBars} size="xl" className="hover:text-sm transition duration-100 ease-in-out" />
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden fixed top-0 left-0 max-w-full h-full bg-indigo-200 shadow-md p-8">
            <div className="flex justify-between mb-4">
              <img src={IDALogo} alt="Logo" className="h-12 w-14" />
              <button onClick={toggleMenu} className="text-gray-800 hover:text-sm transition duration-100 ease-in-out">
                <FontAwesomeIcon icon={faXmark} size="xl" className="hover:text-sm transition duration-100 ease-in-out" />
              </button>
            </div>
            <div>
              <p className='border-b-2 border-gray-200 mb-2'></p>
            </div>
            <div className="flex flex-col space-y-4 justify-center items-center ">
              <Link to="home" smooth={true} className="cursor-pointer text-md align-center hover:text-sm transition duration-100 ease-in-out">Home</Link>
              <Link to="about" smooth={true} className="cursor-pointer text-md hover:text-sm transition duration-100 ease-in-out">About</Link>
              <Link to="services" smooth={true} className="cursor-pointer text-md hover:text-sm transition duration-100 ease-in-out">Services</Link>
              <Link to="projects" smooth={true} className="cursor-pointer text-md hover:text-sm transition duration-100 ease-in-out">Projects</Link>
              <Link to="careers" smooth={true} className="cursor-pointer text-md hover:text-sm transition duration-100 ease-in-out">Careers</Link>
              <Link to="contact" smooth={true} className="cursor-pointer max-w-screen-xl px-28">
                <a href="#contact-us" className="inline-block text-center w-full px-2 py-0.5 bg-indigo-900 text-white font-medium rounded-md hover:text-sm transition duration-100 ease-in-out">
                  Contact Us
                </a>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sm transition duration-100 ease-in-out">
                <FontAwesomeIcon icon={faInstagram} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sm transition duration-100 ease-in-out">
                <FontAwesomeIcon icon={faXTwitter} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sm transition duration-100 ease-in-out">
                <FontAwesomeIcon icon={faFacebook} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sm transition duration-100 ease-in-out">
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;