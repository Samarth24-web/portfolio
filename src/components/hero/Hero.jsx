import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./hero.css";

import image from "../../assets/images/my_image.jpg"

const Hero = () => {
  return (
    <>
      <section className="hero flex-align dark flex-col">
        <div className="image">
          <img
            className="hero-img"
            src={image}
            alt="my image"
          />
        </div>
        <div className="Description">
          <h2 className="my-name">
            Hi, I'm Samarth <span className="waving-hand">👋</span>
          </h2>
          <p className="info para">
          I’m a Fullstack Web Developer with 2 years of experience creating websites. As a B.E. student passionate about software development, I focus on enhancing skills to craft compelling web projects that showcase creativity and technical expertise.
          </p>
          <p className="location">
            <FaLocationDot /> Pune, Maharastra, India.
          </p>
          <p className="available-msg">
            <span className="dot">
              <span className="inner-dot"></span>
            </span>
            Available Now
          </p>

          <ul className="contact-list">
            <li>
              <a href="https://github.com/Samarth24-web" className="logo-hover">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/samarth-bide-515581243/" className="logo-hover">
                <FaLinkedin />{" "}
              </a>
            </li>
            <li>
              <a href="mailto:bidesamarth6@gmail.com" className="logo-hover">
                <SiGmail />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
