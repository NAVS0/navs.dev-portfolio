import React from "react";
import './Hero.css'
import profile from "../assets/profile.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className = 'hero'>
        <div className="right-img">
          <img src={profile} alt="" />
        </div>
        <h1><span>I'm Rogel T. Navarro Jr.,</span> <br /> Frontend Developer <br /> Based in Philippines
        <p>I’m a Frontend Developer & Designer passionate about creating clean, <br /> modern, and user-friendly digital experiences. I specialize in building <br /> responsive websites and applications that look great and <br /> work seamlessly across devices.</p></h1>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero;