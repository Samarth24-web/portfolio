import React from "react";
import { IoIosSunny } from "react-icons/io";
import "./NavBar.css";
import { IoMoonSharp } from "react-icons/io5";

const NavBar = ({ setTheme , theme }) => {
  return (
    <>
      <nav className="flex-align dark">
        <div className="logo">
          <h2>Samarth</h2>
        </div>
        <div className="main-nav">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <span></span>
            </li>
            <li className="SunMoon logo-hover"
              onClick={() => {
                setTheme((res) => (res === "light" ? "dark" : "light"));
              }}
            >
              {
                theme==="dark"?
                <IoIosSunny />:
                <IoMoonSharp />
              }
            </li>
            <li>
              <button>Download CV</button>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
