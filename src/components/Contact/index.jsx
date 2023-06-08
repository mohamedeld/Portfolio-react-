import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
export const Contact = () => {
  return (
    <>
        <div className="text-center py-5" id="contact">
        <h2 className="title">Let's Work Together</h2>
        <div className="content d-flex justify-content-center align-items-center my-5">
            <div className="card me-5 p-5">
                <div className="icon">
                <FontAwesomeIcon icon={faPhone} className='fa-3x'/>
                </div>
                <div className="info">
                    <h3>Phone</h3>
                    <p>123456789</p>
                </div>
            </div>
            <div className="card p-5">
                <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} className='fa-3x'/>
                </div>
                <div className="info">
                    <h3>Email</h3>
                    <p>mohamed@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
