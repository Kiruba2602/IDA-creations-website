import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section className="bg-gray-900 text-white h-auto flex items-center justify-center">
      <div className="flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-2">
            INDUSTRIAL DESIGN & ANIMATIONS
            Karunaa Conclave,
            No.1963, J Block, 3rd Street, 5th Main Road,
            Anna Nagar West, Anna Nagar, Chennai,
            Tamil Nadu - 600040, INDIA
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faFacebook} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faXTwitter} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover:text-sm transition duration-100 ease-in-out" />
            </a>
          </div>
        </div>
    </section>
  );
}

export default Contact;