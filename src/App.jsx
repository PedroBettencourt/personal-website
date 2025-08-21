import { line } from './App.module.css'
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"

function App() {

  return (
    <>
      <h1>Pedro Bettencourt</h1>
      <section>
        <div className={ line }>
          <h2>About</h2>
          <div></div>
        </div>
        <p>
          I am a full-stack developer with a master's degree in biomedical engineering.
          I am skilled in the JavaScript ecosystem, with expertise in React and Express.
          I also have a strong foundation in Python and SQL.
        </p>
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
        Email 
        GitHub 
        Linkedin 
      </section>
    </>
  )
}

export default App
