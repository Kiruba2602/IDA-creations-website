import React from 'react';
import DModel from '../assets/3d-model.png';
import CG from '../assets/cg.png';
import Animation from '../assets/computer.png';
import CPU from '../assets/cpu.png';
import GameDev from '../assets/game-dev.png';
import VFX from '../assets/vfx.png';
import Graphics from '../assets/graphics.png';
import VirtualProd from '../assets/virtual-prod.png';
import VRAR from '../assets/vr-ar.png';
import UIUX from '../assets/ux-ui.png';
import Team from '../assets/team.png';
import Edit from '../assets/film-edit.png';

const Services = () => {
  return (
    <section className="bg-gray-100 text-gray-800 h-screen flex items-center justify-center pt-16" id="services">
      <div className="container mx-auto my-16 px-8 md:px-8 lg:px-16 animate-move-up">
        <h1 className="text-4xl font-medium mb-2 text-center">Our Services</h1>
        <p className='text-lg font-medium mb-8 text-center items-start'>Reinvent your industry with our industrial solutions</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-row items-center">
            <img loading="lazy" src={GameDev} alt="Game Development" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-2">Game Development</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={CPU} alt="Generative AI" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">Generative AI</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={DModel} alt="3D Modeling/Rendering" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">3D Modeling/Rendering</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={Animation} alt="2D/3D Animation" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">2D/3D Animation</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={Graphics} alt="Motion Graphics" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">Motion Graphics</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={VFX} alt="VFX" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">VFX</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={VRAR} alt="AR/VR/MR/XR" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">AR/VR/MR/XR</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={VirtualProd} alt="Virtual Production" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">Virtual Production</h2>
          </div>
          <div className="flex flex-row items-center">
            <img src={CG} alt="CG" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">CG</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={UIUX} alt="UI/UX" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">UI/UX</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={Team} alt="Academic Alliances" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">Academic Alliances</h2>
          </div>
          <div className="flex flex-row items-center">
            <img loading="lazy" src={Edit} alt="Video Editing" className="w-14 h-14 mx-6 my-2" />
            <h2 className="text-xl font-medium mb-1">Video Editing</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;