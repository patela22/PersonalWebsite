import React from "react";
import "./Footer.css";
import Contact from "./Contact";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-submission">
        <p className="footer-submission-heading">
          I would love to hear from you!
        </p>
        <p className="footer-submission-text">Email me about anything</p>
        <Contact />
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">
            © 2024 | Designed & Built by Ansh Patel
          </small>
          <div class="social-icons">
            <a
              className="social-icon-link LinkedIn"
              href="https://www.linkedin.com/in/anshpatelcs/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer" // This is for security purposes when using target='_blank'
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-icon-link Github"
              href="https://github.com/patela22"
              target="_blank"
              aria-label="Github"
              rel="noopener noreferrer" // This is for security purposes when using target='_blank'
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon-link Resume"
              href="../public/Ansh_Patel_Resume.pdf"
              download="Ansh_Patel_Resume.pdf"
              aria-label="Resume"
            >
              <i className="far fa-file"></i>
            </a>
            <a
              class="social-icon-link Email"
              href="mailto:anshrpatel22@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <i class="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
