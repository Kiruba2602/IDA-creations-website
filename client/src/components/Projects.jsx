import React from 'react';
import img1 from '../assets/project1.jpg';
import img2 from '../assets/project2.jpg';
import img3 from '../assets/project3.jpeg';

const Projects = () => {
  return (
    <section className="bg-gray-100 text-gray-800 h-full flex items-center justify-center pt-8 mb-16" id="projects">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl text-center font-bold mb-4">My Projects</h2>
        <p className='text-lg text-center mb-16'>Have a sneak peak at the Arts we Crafted</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="border border-gray-800 rounded-3xl p-1">
              <img loading="lazy" src={img1} alt="Project 1" className="rounded-3xl shadow-md object-fill w-full h-48"/>
              <h3 className='text-xl font-bold text-center my-2'>Precision Strike</h3>
              <p className='text-xs font-medium text-center '>Mobile shooting game</p>
              <div className="text-center">
                <a href="#" className="inline-block mx-auto mt-4 px-2 py-0.3 bg-gray-800 text-white font-small rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                    Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="border border-gray-800 rounded-3xl p-1">
              <img loading="lazy" src={img2} alt="Project 2" className="rounded-3xl shadow-lg object-fill w-full h-48" />
              <h3 className='text-xl font-bold text-center my-2'>Turbo Thurst</h3>
              <p className='text-xs font-medium text-center '>Mobile legends AAA title racing mobile game</p>
              <div className="text-center">
                <a href="#" className="inline-block mx-auto mt-4 px-2 py-0.3 bg-gray-800 text-white font-small rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                    Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="border border-gray-800 rounded-3xl p-1">
              <img loading="lazy" src={img3} alt="Project 3" className="rounded-3xl shadow-md object-fill w-full h-48"/>
              <h3 className='text-xl font-bold text-center my-2'>Startup Fest Expo</h3>
              <p className='text-xs font-medium text-center '>Oneyes startup fest expo</p>
              <div className="text-center">
                <a href="#" className="inline-block mx-auto mt-4 px-2 py-0.3 bg-gray-800 text-white font-small rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                    Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;