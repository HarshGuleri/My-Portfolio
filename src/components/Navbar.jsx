import React from 'react';

const Navbar = () => {
  return (
    <div className="container nav_bar"
    data-aos="fade-down"
    data-aos-duration="1000"
    >
      <div className="left nav_item"><h2>Harsh Guleri</h2></div>
      <div className="right">
        <a href="#home" className="nav_items">Home</a>
        <a href="#skills" className="nav_items">Skills</a>
        <a href="#projects" className="nav_items">Projects</a>
        <a href="#experience" className="nav_items">Certifications</a>
        <a href="#contact" className="nav_items">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
