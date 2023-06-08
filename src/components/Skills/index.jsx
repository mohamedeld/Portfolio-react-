import React, { useState } from 'react'
import "./Skills.css";
export const Skills = () => {
  const [skills,setSkills] = useState([
    {name:"HTML",width:"90%"},
    {name:"CSS",width:"90%"},
    {name:"JAVASCRIPT",width:"80%"},
    {name:"REACT",width:"50%"},
    {name:"ANGULAR",width:"50%"},
    {name:"NODEJS",width:"80%"},
    {name:"DOCKER",width:"50%"},
    {name:"SQL",width:"80%"},
    {name:"DJANGO",width:"80%"},
  ])
  return (

    <div className='container py-5'>
    <div className="skills-section px-5">
      {
        skills.map((skill,index)=>(
          <div className="skill" key={index}>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{width: skill.width}}></div>
            </div>
        </div>
        ))
        }
    
  </div>
    </div>
    
  )
}
