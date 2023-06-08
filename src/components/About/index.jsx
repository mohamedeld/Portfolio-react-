import React from 'react';
import "./About.css";
import myCV from "../../assets/Mohamed_Elsayed_Elrfaay_Full_Stack_Developer.pdf";
export const About = () => {
  const handleClick =()=>{
    const link = document.createElement('a');
    link.href = myCV;
    link.setAttribute('download', 'myCV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className='container py-5 text-center'>
        <h1 className='py-3'>About Me</h1>
        <p className='aboutParagraph'>I'm a software engineer, I am a fresh graduate from the faculty of computer and information science after finishing my collage journey , I am joined to iti platform training for 4 months in full stack javascript developer</p>
        <button className='aboutBtn btn btn-primary my-3 px-3 btn-lg' onClick={handleClick}>My CV</button>
    </div>
  )
}
