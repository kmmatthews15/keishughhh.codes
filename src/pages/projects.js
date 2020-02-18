import React from 'react'
import Layout from '../components/layout'
import '../styles/projects.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Projects = () => {
   return (
      <div>
         <Layout>
            <div className="projects-container">
               <div className="left">
                  <p className="projects-header">Projects</p>
                  <div className="projects-container-details">
                     <p className="projects-title">Jot</p>
                     <p className="projects-content-container">
                        Jot is a note management app that merges a sleek design with an air of simplicity. Here at Jot we wanted to streamline the note management 
                        process and make user experience as easy as possible. We want anyone and everyone to have the opportunity to use our application and feel at ease knowing that it wont be a complicated experience!
                  </p>
                  <div>
                  <a href="https://www.github.com/kmmatthews15/jot" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="inner-project-contact" /></a>
                  <a href="https://sleepy-springs-63031.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHome} className="inner-project-contact" /></a>
                  </div>
                  </div>
                  <div className="projects-container-details">
                     <p className="projects-title">Mood</p>
                     <p className="projects-content-container">
                     Mood is a simple, sleek one page static layout with seamless design and simplistic features. Now just a simple webpage, Mood will soon transform into a self are website chalk full of 
                     self care tips, support for users, and daily motivations for all who venture onto the website.
                  </p>
                  <div>
                  <a href="https://www.github.com/kmmatthews15/mood" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="inner-project-contact" /></a>
                  <a href="https://kmmatthews15.github.io/mood/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHome} className="inner-project-contact" /></a>
                  </div>
                  </div>
               </div>
            </div>
         </Layout>
      </div>
   )
}

export default Projects 