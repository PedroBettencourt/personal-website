import { projects, project, links } from "./Projects.module.css";
import messagingapp from "./assets/messagingapp.png";
import photoapp from "./assets/photoapp.png";

function Projects() {
    
    return(
        <div className={ projects }>
            <div className={ project }>
                <h3>Messaging App</h3>
                <p>Messaging app that allows users to talk to their contacts, as well as new ones. Built with React, Express, and Prisma.</p>
                <img src={ messagingapp } alt="Messaging app example" />
                <div className={ links }>
                    <a href="https://github.com/PedroBettencourt/messaging-app">Code</a>
                    <a href="https://messaging-app-qffp.onrender.com/">Live</a>
                </div>
            </div>

            <div className={ project }>
                <h3>Photo-tagging App</h3>
                <p>Photo-tagging app like "Where's Waldo?". Users have to find 3 characters in the image. Built with React, Express, and Prisma.</p>
                <img src={ photoapp } alt="Photo app example" />
                <div className={ links }>
                    <a href="https://github.com/PedroBettencourt/photo-tagging">Code</a>
                    <a href="https://proverb-clicker-kdlw.onrender.com/">Live</a>
                </div>
            </div>
        </div>
    )
}

export default Projects