import React from 'react' 
import { projectData } from '../../data/project-data'
import { BsBoxArrowUpRight } from "react-icons/bs";
import "./Projects.css"

const Projects = () => {
  return (
    <>
    <section className='project-section flex-align mid-dark'>
      <h3 className='title'>Work</h3>
      <p className='subTitle'>Showcasing My Expertise Through Completed Projects:</p>
      {
        projectData.map((data,i)=>(
          <div key={i} className={`project ${i/2?"left":"right"} flex-col`}>
            <div className="image">
              <img className='project-img' src={data.image} alt="project image" />
            </div>
            <div>

              <div className="project-info">
                <h3>{data.title}</h3>
                <p className=' project-description para'>{data.info}</p>
                {
                  data.technologyUsed.map(tech=>(
                    <div className="technology">
                      <p className='para'>{tech}</p>
                    </div>
                  ))
                }
                <br />
                <span  className='logo-hover' ><BsBoxArrowUpRight/></span>
              </div>
            </div>
          </div>
        ))
      }
    </section>
    </>
  )
}

export default Projects
