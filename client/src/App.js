import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Footer from './components/Footer'
import Process from "./components/Process";
import Projects from "./components/Projects";
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-8">
        <Home />
        <About />
        <Services />
        <Process />
        <Projects />
        <Clients />
        <Footer />
      </div>
    </div>
  );
}

export default App;
