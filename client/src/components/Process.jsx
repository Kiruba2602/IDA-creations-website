import React from 'react';
import discussion from '../assets/discussion.jpg';
import ideate from '../assets/ideate.jpg';
import execution from '../assets/execution.jpg';

const Process = () => {
  return (
    <section className="bg-green-100 text-gray-800 h-auto flex items-center justify-center px-16" id="process">
      <div className="container mx-auto my-16">
        <h2 className="text-3xl font-medium text-center mb-2">Our Working Process</h2>
        <p className="text-lg text-center mb-16">A well-structured workflow with great design execution</p>
        <div className="flex flex-row justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="bg-white rounded-3xl shadow-xl w-48 h-60 px-4 py-8 flex flex-col">
              <div className="relative right-8 bottom-10">
                <div className="bg-purple-800 rounded-full shadow-md px-3 py-0.5 absolute">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
              </div>
              <div className="flex items-center justify-center mt-6 mb-4">
                <img loading="lazy" src={discussion} alt="Discussion" className="w-24 h-22" />
              </div>
              <h3 className="text-xl font-bold">Discussion</h3>
              <p className='text-xs font-lighter'>Understand the client's business goals and challenges for building a strong relationship.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg w-48 h-60 px-4 py-8 flex flex-col">
              <div className="relative right-8 bottom-10">
                <div className="bg-purple-800 rounded-full shadow-md px-3 py-0.5 absolute">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
              </div>
              <div className="flex items-center justify-center mt-6 mb-4">
                <img loading="lazy" src={ideate} alt="Ideate" className="w-24 h-22" />
              </div>
              <h3 className="text-xl font-bold">Ideate</h3>
              <p className='text-xs font-lighter'>Gather ideas and create the first concept for the future product.</p>
              
            </div>
            <div className="bg-white rounded-3xl shadow-lg w-48 h-60 px-4 py-8 flex flex-col">
              <div className="relative right-8 bottom-10">
                <div className="bg-purple-800 rounded-full shadow-md px-3 py-0.5 absolute">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
              </div>
              <div className="flex items-center justify-center mt-2 mb-4">
                <img loading="lazy" src={execution} alt="Execution" className="w-22 h-20" />
              </div>
              <h3 className="text-xl font-bold">Execution</h3>
              <p className='text-xs font-lighter mb-4'>Provide the first draft of a project, accept minor and major revisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process;