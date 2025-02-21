import React, { useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';  // Make sure the import path is correct
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(()=>{
    Aos.init()
  }, []) 

  return (
    <>
    <Navbar/>
    <div className="container">
      <Home/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
