import React, { useState } from "react";
import './Contact.css';
import theme_pattern from '../assets/theme_pattern.svg';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [result, setResult] = useState(""); // ✅ Fix: define state

  const [state, handleSubmit] = useForm("xwpnebad");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Work With Me</h1>
      </div>

      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let’s Connect</h1>
          <p>
          Looking to collaborate or have a question in mind? Drop me a message—I’d be happy to connect and discuss how we can work together.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />{" "}
              <p>rogelnavarro74@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" /> <p>09984518951</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />{" "}
              <p>Tigaon, Camarines Sur, Philippines</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={handleSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" required />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />

          <label>Write your message</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button className="contact-submit" type="submit">Submit now</button>
          {/* ✅ Show result message */}
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
