import React from 'react' 
import { projectData } from '../../data/project-data'
import { BsBoxArrowUpRight } from "react-icons/bs";
import "./Projects.css"

const Projects = () => {
  return (
    <>
    <section className='project-section'>
      <h3 className='title'>Work</h3>
      <p className='subTitle'>Showcasing My Expertise Through Completed Projects:</p>
      {
        projectData.map((data,i)=>(
          <div className={`project ${i/2?"left":"right"}`}>
            <div className="image">
              <img className='project-img' src={data.image} alt="project image" />
            </div>
            <div>

              <div className="project-info">
                <h3>{data.title}</h3>
                <p className='dec'>{data.info}</p>
                {
                  data.technologyUsed.map(tech=>(
                    <div className="technology">
                      <p>{tech}</p>
                    </div>
                  ))
                }
                <span><BsBoxArrowUpRight /></span>
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
