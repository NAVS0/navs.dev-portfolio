import React, { useState } from "react";
import './Contact.css';
import theme_pattern from '../assets/theme_pattern.svg';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState(""); // ✅ Fix: define state

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "5173b02c-02da-4d8c-90c7-65e7771a0143");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    
    const data = await response.json();
    console.log(data); // Debugging
    
    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong. Please try again.");
    }    
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let’s Connect</h1>
          <p>
            Have an idea, a question, or just want to say hi? Drop me a message
            anytime! I’d be happy to chat and explore how we can create
            something awesome together.
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
        <form onSubmit={onSubmit} className="contact-right">
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
