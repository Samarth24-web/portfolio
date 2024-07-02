import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="Description">
          <h2 className="my-name">
            Hi, I'm Samarth <span className="waving-hand">👋</span>
          </h2>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem atque laborum qui vel? Laudantium esse iusto rerum
            illo, excepturi officiis magni modi minus, odio voluptatibus
            consectetur reiciendis ab blanditiis temporibus impedit repellat
            dolores maxime ad earum assumenda quo. Vero enim ullam minus illo
            perspiciatis veniam assumenda suscipit sit esse soluta.
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
              <a href="">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />{" "}
              </a>
            </li>
            <li>
              <a href="">
                <SiGmail />
              </a>
            </li>
          </ul>
        </div>

        <div className="image">
          <img className="hero-img"
            src="https://purepng.com/public/uploads/large/purepng.com-ironmanironmansuperheromarvel-comicscharactermarvel-studiosrobert-downey-jrtony-stark-1701528611623ycxvt.png"
            alt="my image"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
