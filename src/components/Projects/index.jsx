import React, { useState } from 'react';
import programmingImage from '../../assets/images/programming.jpg';

import "./Projects.css";
export const Projects = () => {
    const [projects,setProjects] = useState([
        {proImage:programmingImage,category:"MEAN Project",subCategory:"Programming"},
        {proImage:programmingImage,category:"React Project",subCategory:"Programming"},
        {proImage:programmingImage,category:"MERN Project",subCategory:"Programming"},
        {proImage:programmingImage,category:"NODEJS Project",subCategory:"Programming"},
        {proImage:programmingImage,category:"Angular Project",subCategory:"Programming"},
    ])
  return (
    <>
        <section className="project py-5" id="project">
        <h2 className="title">Projects</h2>
        <div className="content">
            {
                projects.map((project,index)=>(
                    <div className="project_card" key={index}>
                <div className="project_image">
                    <img src={project.proImage} alt={project.category}/>
                </div>
                <div className="project_info">
                    <p className="project_category">{project.category}</p>
                    <strong className="project_title">
                        <span>{project.subCategory}</span>
                        <a href="#" className="more_details">More Details</a>
                    </strong>
                </div>
            </div>
                ))
            }
           
        </div>
    </section>
    </>
  )
}
