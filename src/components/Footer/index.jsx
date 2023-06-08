import React from 'react'
import "./Footer.css";
import { faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Footer = () => {
  return (
    <>
        <div className="footer">
        <p className="footer_title">Copyrights @ <span>Mohamed Elrfaay</span> </p>
        <div className="social-icon">
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
    </div>
    </>
  )
}
