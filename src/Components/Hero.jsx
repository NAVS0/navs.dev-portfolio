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
          <span>I'm Rogel T. Navarro Jr., </span>
          Frontend <br /> Developer Based in Philippines
        </h1>
        <p>
          I’m a Frontend Developer & Designer passionate about creating clean,
          modern, <br /> and user-friendly digital experiences. I specialize in building 
          responsive websites <br /> and applications that look great and work seamlessly across devices.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
          </div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
