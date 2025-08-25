import React from "react";
import './Hero.css'
import profile from "../assets/profile.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className = 'hero'>
        <img src={profile} alt="" />
        <h1><span>I'm Rogel T. Navarro,</span> frontend developer based in Philippines</h1>
        <p>I’m a frontend developer and designer passionate about creating sleek, <br /> user-friendly websites, smart apps, and innovative digital experiences.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero;