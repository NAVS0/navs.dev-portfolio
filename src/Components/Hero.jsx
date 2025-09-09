import React from "react";
import './Hero.css'
import profile from "../assets/profile.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="right-img">
        <img src={profile} alt="profile" />
      </div>
      <div className="hero-content">
        <h1>
          <span>I'm Rogel T. Navarro Jr. </span> <br />
          a Web Developer based in Philippines.
        </h1>
        <p>
        I’m a Web Developer passionate about crafting clean, modern, and user-friendly digital experiences. <br />
        I specialize in building responsive websites and web applications that deliver seamless performance <br /> 
        and engaging designs across all devices.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Work With Me</AnchorLink>
          </div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
