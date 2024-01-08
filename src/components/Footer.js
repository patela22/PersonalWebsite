import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-submission">
        <p className="footer-submission-heading">
          I would love to hear from you!
        </p>
        <p className="footer-submission-text">
          Email me about anything
        </p>
        <Contact />
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">
            © 2024 | Designed & Built by Ansh Patel
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link Linkedln"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
            <Link
              class="social-icon-link Github"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github"></i>
            </Link>
            <Link
              class="social-icon-link Resume"
              to="/"
              target="_blank"
              aria-label="Resume"
            >
              <i class="far fa-file"></i>
            </Link>
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
