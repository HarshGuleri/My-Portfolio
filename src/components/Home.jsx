import React, { useEffect, useReducer } from 'react';
// import pdf from '/assets/pdf/resume.pdf';
import hero from './data/hero.json';
import Typed from "typed.js";
import { useRef } from 'react';


const Home = () => {

  const typedRef = useRef(null);
  useEffect(() =>{
    const options ={
      strings: [
        "Welcome to my profile",
        "My Name is Harsh Guleri",
        "I'm Full Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);
    return () =>{
      typed.destroy();
    };
  }, [])
  return (
    <div className="container home" id='home' >
      <div className="left"

      data-aos="fade-up-right"
    data-aos-duration="1000"
      >
      <h1 ref={typedRef}>
        
      </h1>
      <a href="/assets/pdf/resume.pdf" 
      download="../public/resume.pdf"
      className="btn btn-outline-pdf my-3">Download Resume</a>
      </div>

      
      <div className="right"
      data-aos="fade-up-left"
      data-aos-duration="1000"
      > 
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="admin" />
        </div>
      </div>
    </div>
  )
}

export default Home
