import { skills, items, item, svg } from "./Skills.module.css"
import html from "./assets/html.svg"
import css from "./assets/css.svg"
import javascript from "./assets/js.svg"
import react from "./assets/react.svg"
import node from "./assets/node.svg"
import express from "./assets/express.svg"
import sql from "./assets/sql.svg"
import postgres from "./assets/postgres.svg"
import prisma from "./assets/prisma.svg"
import jest from "./assets/jest.svg"
import git from "./assets/git.svg"
import github from "./assets/github.svg"
import linux from "./assets/linux.svg"
import python from "./assets/python.svg"

function Skills() {

    return(
          <div className={ skills }>
              <section>
                <h3>Front-end</h3>
                <div className={ items } >
                  <div className={ item }><img src={ html } alt="HTML logo" className={ svg }/><span>HTML</span></div>
                  <div className={ item }><img src={ css } alt="CSS logo" className={ svg }/><span>CSS</span></div>
                  <div className={ item }><img src={ javascript } alt="JavaScript logo" className={ svg }/><span>JavaScript</span></div>
                  <div className={ item }><img src={ react } alt="React logo" className={ svg }/><span>React</span></div>
                </div>
              </section>
              <section>
                <h3>Back-end</h3>
                <div className={ items } >
                  <div className={ item }><img src={ node } alt="Node logo" className={ svg }/><span>Node.js</span></div>
                  <div className={ item }><img src={ express } alt="Express logo" className={ svg }/><span>Express</span></div>
                  <div className={ item }><img src={ python } alt="Python logo" className={ svg }/><span>Python</span></div>
                  <div className={ item }><img src={ sql } alt="SQL logo" className={ svg }/><span>SQL</span></div>
                  <div className={ item }><img src={ postgres } alt="Postgres logo" className={ svg }/><span>Postgres</span></div>
                  <div className={ item }><img src={ prisma } alt="Prisma logo" className={ svg }/><span>Prisma</span></div>
                  <div className={ item }><img src={ jest } alt="Jest logo" className={ svg }/><span>Jest</span></div>
                </div>
              </section>
              <section>
                <h3>Others</h3>
                <div className={ items } >
                  <div className={ item }><img src={ git } alt="Git logo" className={ svg }/><span>Git</span></div>
                  <div className={ item }><img src={ github } alt="GitHub logo" className={ svg }/><span>GitHub</span></div>
                  <div className={ item }><img src={ linux } alt="Linux logo" className={ svg }/><span>Linux</span></div>
                </div>
              </section>
          </div>
    )
}

export default Skills