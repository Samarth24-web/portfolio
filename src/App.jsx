import { useState } from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skill from "./components/skills/Skill.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  console.log(theme);
  return (
    <>
      <main data-theme={theme}>
        <NavBar setTheme={setTheme} theme={theme}></NavBar>
        <Hero></Hero>
        <About></About>
        <Skill></Skill>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
