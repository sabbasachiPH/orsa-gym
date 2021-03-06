import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import './Footer.scss';

const Footer = () => {
    return (
        <div className="foot">
            <div className="footColumn"><h1>Power X</h1>
            </div>
            <div className="footColumn">
                <h3> Need Help?</h3>
                <ul>
                    <li>Help Center</li>
                    <li>Email Support</li>
                    <li>Live Chat</li>
                    <li>Gift Certificates</li>
                    <li>Send Us Feedback</li>
                </ul>
            </div>
            <div className="footColumn">
                <h3>Digital Resources</h3>
                <ul>
                    <li>Articles</li>
                    <li>E-books</li>
                </ul>
            </div>
            <div className="footColumn ">
                <h3>Connect With Us</h3>

        <div className="socialIcon">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </div>
        <p>Forum</p>
      </div>
      <div className="footColumn ">
        <h3>Join Our News Letter</h3>
        <p>
          Get exclusive news, features, and updates from The Shredder Weight
          Loss Academy
        </p>
      </div>
    </div>
  );
};

export default Footer;
