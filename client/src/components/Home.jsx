import React from 'react';
import vr from '../assets/image1.jpeg';
import vr2 from '../assets/Vid.png';

function Home() {
  return (
    <section className="bg-gray-100 text-gray-800 h-screen flex items-center justify-center pt-16" id="home">
      <div className="w-full h-full px-4 sm:px-4 lg:px-8 animate-move-up">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="col-span-1 md:col-span-1 lg:col-span-1 px-10">
            <img loading="lazy" src={vr} alt="VR" className="max-w-sm h-auto rounded-lg mb-6" />
            <h1 className="text-5xl font-medium mb-4">Bringing Ideas To Our Reality</h1>
            <a href="#" className="inline-block px-4 py-1 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
              Explore
            </a>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <img loading="lazy" src={vr2} alt="VR" className="w-full h-auto rounded-lg mb-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;