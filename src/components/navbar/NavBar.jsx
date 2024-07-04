import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { IoMoonSharp } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const NavBar = ({ setTheme, theme }) => {
  const [navState, setNavState] = useState(false);

  // useEffect(()=>{
  //   if(navState){
  //     document.body.addEventListener("click" ,()=>{
  //       setNavState(!navState)
  //      })
  //   }
  // },[navState])

  return (
    <>
      <nav className="flex-align dark">
        <div className="logo">
          <h2>Samarth</h2>
        </div>
        <div className={`main-nav ${navState ? "open" : ""}`}>
          <ul className="flex-col">
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
            <li
              className="SunMoon logo-hover"
              onClick={() => {
                setTheme((res) => (res === "light" ? "dark" : "light"));
              }}
            >
              {theme === "dark" ? <IoIosSunny /> : <IoMoonSharp />}
            </li>
            <li>
              <button>Download CV</button>{" "}
            </li>
          </ul>
        </div>
        <div
          className={`hamburger ${navState ? "close" : ""}`}
          onClick={() => setNavState(!navState)}
        >
          {navState ? <IoMdClose /> : <RxHamburgerMenu />}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
