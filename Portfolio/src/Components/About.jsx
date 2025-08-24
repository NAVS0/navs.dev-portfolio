import React from "react";
import './About.css'
import theme_pattern from "../assets/theme_pattern.svg";
import navs_profile from "../assets/navs_profile.svg";

const About = () => {
    return (
        <div id='about' className="about">  
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={navs_profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a frontend developer and designer who loves creating clean, modern, and user-friendly digital experiences. My focus is on building websites and apps that not only look great but also work seamlessly across devices.</p>
                        <p>With a passion for blending design and technology, I enjoy turning ideas into functional and engaging products. I’m always exploring new tools and trends to push creativity and deliver solutions that stand out.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
                        <div className="about-skill"><p>C#</p><hr style={{width: "50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECT COMPETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About;