import React, { use } from "react";
import './Footer.css'
import navslogo from '../assets/navslogo.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import user_icon from '../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <img src={navslogo} alt="" className="footerlogo"/>
                    <p>I’m a Web Developer who loves building clean, modern, and user-friendly digital experiences. <br /> My focus is on creating websites and applications that not only look visually appealing but also perform seamlessly across all devices.</p>
                </div>
                <div className="footer-top-right">
                <AnchorLink className='footer-subscribe' offset={50} href='#contact'>Work With Me</AnchorLink>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Rogel Navarro. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Work with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;