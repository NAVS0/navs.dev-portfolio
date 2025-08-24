import React, { use } from "react";
import './Footer.css'
import footer_logo from '../assets/footer_logo.svg'
import user_icon from '../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <img src={footer_logo} alt="" />
                    <p>I’m a frontend developer and designer who loves creating clean, modern, and user-friendly digital experiences. My focus is on building websites and apps that not only look great but also work seamlessly across devices.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Rogel Navarro. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;