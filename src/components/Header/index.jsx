import React from 'react'
import "./Header.css";
import { faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Header = () => {
  return (
    <>
        <div className="main py-5">
        <div className='ps-5'>
            <h2>Hello, I'M Mohamed<br/>
            <span>Software Engineer</span></h2>
            <h3>I'm passion with Cloud and Programming </h3>
            <a href="#projects" className="main-btn">View my work</a>
            <div className="social-icon">
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
        </div>
    </div>
    </>
  )
}
