import React from "react";
import './About.css'
import theme_pattern from "../assets/theme_pattern.svg";
import navs_profile from "../assets/navs_profile.svg";

const About = () => {
    return (
        <div id='about' className="about">  
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={navs_profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a Web Developer passionate about creating clean, modern, and user-friendly digital experiences. I specialize in developing responsive websites and web applications that not only look great but also perform seamlessly across devices.</p>
                        <p>With experience as a Frontend Developer, Web Designer, and Freelance Creator, I’ve worked on projects ranging from business websites to custom digital solutions. These opportunities have strengthened my skills in both design and development, allowing me to deliver products that balance creativity, functionality, and performance.</p>
                    </div>
                    <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr className="skill-bar html" /></div>
                    <div className="about-skill"><p>JavaScript</p><hr className="skill-bar js" /></div>
                    <div className="about-skill"><p>React</p><hr className="skill-bar react" /></div>
                    <div className="about-skill"><p>Node.js</p><hr className="skill-bar node" /></div>
                    <div className="about-skill"><p>C#</p><hr className="skill-bar csharp" /></div>
                    </div>

                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
            </div>
        </div>
    )
}

export default About;