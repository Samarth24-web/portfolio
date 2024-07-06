import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { IoMoonSharp } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const NavBar = ({ setTheme, theme }) => {
  const [navState, setNavState] = useState(false);
  const [navBlur , setNavBlur]=useState(false);

  localStorage.setItem("t" ,  theme );
  console.log(localStorage.getItem("t"))

  useEffect(()=>{
      window.addEventListener("scroll",()=>{
      if(document.documentElement.scrollTop>80 && document.documentElement.scrollTop<350 && navBlur===false){
        setNavBlur(true);
        document.querySelector("nav").classList.add("blur");
       }
       if(document.documentElement.scrollTop<80 && navBlur===true){
         setNavBlur(false);
         document.querySelector("nav").classList.remove("blur");
        }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  } ,[navBlur])

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
