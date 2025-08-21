import { line, about, contacts, email, links } from './App.module.css'
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"

function App() {

  return (
    <>
      <h1>Pedro Bettencourt</h1>
      <section>
        <div className={ line }>
          <h2>About</h2>
          <div></div>
        </div>
        <div className= { about }>
          I am a full-stack developer with a master's degree in biomedical engineering.
          I am skilled in the JavaScript ecosystem, with expertise in React and Express.
          I also have a strong foundation in Python and SQL.
        </div>
      </section>
      
      <section>
        <div className={ line }>
          <h2>Skills</h2>
          <div></div>
        </div>
        <Skills />
      </section>

      <section>
        <div className={ line }>
          <h2>Projects</h2>
          <div></div>
        </div>
        <Projects />
      </section>


      <section>
        <div className={ line }>
          <h2>Contact</h2>
          <div></div>
        </div>
        <div className={ contacts }>
          <div className={ email }>
            <b>Email:</b> 
            <div>pedropbettencourt@gmail.com</div>
          </div>
          <div className={ links }>
            <a href="https://github.com/PedroBettencourt/"><img src={ github } alt="GitHub logo" /></a>
            <a href="https://www.linkedin.com/in/pedro-bettencourt/"><img src={ linkedin } alt="Linkedin logo" /> </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
