import React from 'react'
import "./NavBar.css";
export const NavBar = () => {
  return (
    <>
      <div className="navbar px-4">
        <a href="#" className="logo">Profile</a>
        <nav className="navigation">
            <a href="#services">services</a>
            <a href="#project">project</a>
            <a href="#contact">contact</a>
        </nav>
    </div>
    </>
  )
}
