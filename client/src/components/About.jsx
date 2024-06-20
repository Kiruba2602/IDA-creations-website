import React from 'react';
import Aboutpng from '../assets/png1.png'

function About() {
  return (
    <section className="bg-white text-gray-800 h-auto flex items-center justify-center pt-16 my-8" id="about">
      <div className="max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-3xl font-medium text-gray-900 mb-4">IDA - AR, VR and MR Company in India</h3>
            <p className="text-lg text-gray-700 mb-6">
              We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and elevate your Insustry and Business With Immersive Technical solution with extensiveand wide range of Imagination that becomes Possible.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like AR (Augmented Reality), VR(Virtual Reality), MR(Mixed Reality) and XR(eXtended Reality). To reshape the entire future.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Join Us into the Immersive Future
            </p>
            <a href="#" className="inline-block px-3 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
              Learn more
            </a>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <img loading="lazy" src={Aboutpng} alt="About image" className="w-full h-auto rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;