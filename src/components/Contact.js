import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm('service_jmye3jr', 'template_9cgxd6n', form.current, 'KFomAp70VO5rc2cZ6')
        .then(
          () => {
            alert('Thank you for reaching out! I will get back to you as soon as possible.');
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <section className="contact-form" id="contact">
        <div className="contact-header">
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <div className="input-field">
            <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                pattern="^[a-zA-Z]+ [a-zA-Z]+$"
                title="Please enter a valid full name (Firstname Lastname)"
              />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input
                type="email"
                name="to_email"
                placeholder="Email Address"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Please enter a valid email address"
              />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
            <span className="focus"></span>
          </div>
          <div className="contact-button-box">
            <button className="button-box">
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    );
  };
  
  export default Contact;