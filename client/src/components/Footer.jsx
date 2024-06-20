import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', {email});
      if (response.status === 200){
        console.log("successfully subscribed to the newsletter.");
        setEmail('');
      }
    } catch (err) {
      console.error(err);
      setEmail('');
    }
  }
  return (
    <footer className="bg-gray-900 h-full text-gray-400 py-2 px-4 pt-16" id='contact-us'>
      <div className="container mx-auto flex flex-col mx-auto md:flex-row items-start justify-around animate-move-up">
        <div className="flex w-1/3">
          <Contact />
        </div>
        <div className="flex flex-col items-start space-y-4 h-auto relative mb-4">
          <h2 className="text-xl font-bold text-white">Newsletter</h2>
          <p className="text-gray-400">
            Subscribe to our newsletter to stay updated.
          </p>
          <form className="flex flex-row items-start space-x-2 w-full" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-800 text-gray-400 py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Subscribe</button>
          </form>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-xl font-bold text-white">Find Us</h2>
          <div className="flex items-center space-x-2 text-gray-400">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>
              Syncfusion Software
              Pvt Ltd, Karuna...
              Permanently closed
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0466434533784!2d80.14887761473592!3d13.061401690284692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5563b31153e9e7%3A0x5f469474464d2c46!2sSyncfusion%20Software%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1701380673563!5m2!1sen!2sin"
            width="300"
            height="200"
            className='border-0'
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="container mx-auto py-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} IDACreations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;