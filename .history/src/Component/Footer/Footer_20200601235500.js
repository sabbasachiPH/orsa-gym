import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faYouTube } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';
// var FontAwesome = require('react-fontawesome');

const Footer = () => {
    return (
        <div className="foot">
            {/* <div className='container'>
            <h1>Power X</h1>
            </div> */}
            <div className="footColumn"><h1>Power X</h1></div>
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
                <h3>connect With Us</h3>
               
                <div className="socialIcon">
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faYouTube} />
                 {/*<FontAwesomeIcon icon={fainstagram} />
                <FontAwesomeIcon icon={fainstagram} />
                <FontAwesomeIcon icon={fatwitterSquare} />
                <FontAwesomeIcon icon={fafasWhatsapp} />
                <FontAwesomeIcon icon={facoffee} /> }*/}=
                <i class="fab fa-youtube 2x"></i>YouTube
                <i class="fab fa-facebook-f"></i>FaceBook
                <i class="fab fa-instagram"></i>Instagram
                <i class="fab fa-twitter-square"></i>Twitter
                <i class="fab fa-whatsapp"></i>WhatsApp
                </div>
                <p>Forum</p>
            </div>
            <div className="footColumn">
                <h4>Join Our News Letter</h4>
                <p>Get exclusive news, features, and updates from The Shredder Weight Loss Academy</p>
            </div>
        </div>
    );
};

export default Footer;