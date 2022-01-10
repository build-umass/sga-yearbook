import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <span className="footer-heading">The Index</span>
          <span className="footer-text">&copy; The Index 2022</span>
          <div>
            <a
              href="https://www.facebook.com/UMassSGA/"
              target="_blank"
              className="white-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
            <a
              href="https://twitter.com/umasssga"
              target="_blank"
              className="white-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
            <a
              href="https://www.instagram.com/umassindex/"
              target="_blank"
              className="white-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a
              href="https://www.umass.edu/sga/index_preorder/"
              target="_blank"
              className="white-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faChrome} className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
