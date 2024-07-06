import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import "./Skill.css";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import mongodb from "../../assets/images/mongodb.png";
import java from "../../assets/images/java.png";
import spring from "../../assets/images/spring.png";
import bootstrap from "../../assets/images/bootstrap.png";
import sql from "../../assets/images/sql.png";
import git from "../../assets/images/git.png";
import sprigBOOt from "../../assets/images/spring_boot.png";
import maven from "../../assets/images/maven.png";
const Skill = () => {
  return (
    <>
      <section className="skill-section flex-align dark ideal-padding">
        <h3 className="title">Skills</h3>
        <p className="subTitle">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="skills">
          <div className="skill">
            <img src={html} alt="html logo" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src={css} alt="css logo" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <img src={bootstrap} alt="bootstrap logo" />
            <p>BOOTSTRAP</p>
          </div>
          <div className="skill">
            <img src={js} alt="js logo" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill">
            <img src={react} alt="react logo" />
            <p>REACT</p>
          </div>
          <div className="skill">
            <img src={mongodb} alt="mongodb logo" />
            <p>MONGO DB</p>
          </div>
          <div className="skill">
            <img src={java} alt="java logo" />
            <p>JAVA</p>
          </div>
          <div className="skill">
            <img src={maven} alt="spring logo" />
            <p>MAVEN</p>
          </div>
          <div className="skill">
            <img src={spring} alt="spring logo" />
            <p>SPRING</p>
          </div>
          <div className="skill">
            <img src={sprigBOOt} alt="spring logo" />
            <p>SPRINGBOOT</p>
          </div>
          <div className="skill">
            <img src={sql} alt="sql logo" />
            <p>SQL</p>
          </div>
          <div className="skill">
            <img src={git} alt="git logo" />
            <p>GIT</p>
          </div>
          <div className="skill">
            <div className="logo">
              <ImHtmlFive2 />
            </div>
            <p>HTML</p>
          </div>
          <div className="skill">
            <div className="logo">
              <ImHtmlFive2 />
            </div>
            <p>HTML</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
