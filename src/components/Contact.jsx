import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon "
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/mr.gulerii/" className="items mx-2">
            <FaInstagram className="icons"/>
          </a>
          <a href="https://www.facebook.com/harsh.guleri.9" className="items mx-2">
            <CiFacebook className="icons"/>
          </a>
          <a href="https://www.linkedin.com/in/harshguleri/" className="items mx-2">
          <FaLinkedinIn className="icons"/>
          </a>
          <a href="https://github.com/HarshGuleri" className="items mx-2">
            <FaGithub className="icons"/>
          </a>
          <a href="mailto:webdevmastry@gmail.com" className="items mx-2">
            <BiLogoGmail className="icons"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;