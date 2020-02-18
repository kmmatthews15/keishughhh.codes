import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../styles/about.css'
import keishughhhCodes from '../images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

const About = () => {
   return (
      <div>
         <Helmet>
            <meta charSet="utf=8" />
            <title>About Keisha Matthews</title>
            <meta name="description" content="About Keisha - Keisha is a software developer and designer based in Nashville, TN. When Keisha's not coding, she's exploring new technologies and exploring true crime documentaries." />
         </Helmet>
         <Layout>
            <div className="about-container">
            <div className="inner-about-container">
               <h2 className="inner-about-header">About Me</h2>
               <p className="inner-about-description">Hello, all! I'm Keisha Matthews, also known as <b><a href="https://www.instagram.com/keishughhh.codes" className="about-link" target="_blank" rel="noopener noreferrer">@keishughhh</a></b> on Instagram. I'm
            currently working on some personal projects after completing a Full Stack Development Bootcamp as well as seeking employment! One of my goals is to actively learn as much
            as I can in the tech stack I'm familiar with (MERN stack) as well as learn many more technologies and honing in on my skills as much as possible!
            </p>
               <div>
                  <a href="https://www.linkedin.com/in/keisha-matthews-794a55189" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="inner-about-contact" /></a>
                  <a href="https://www.github.com/kmmatthews15" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="inner-about-contact" /></a>
                  <a href="https://www.instagram.com/keishughhh.codes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="inner-about-contact" /></a>
                  <a href="mailto:hello@keishughhhcodes.co?subject=Keisha Inquiry"><FontAwesomeIcon icon={faEnvelopeSquare} className="inner-about-contact" /></a>
               </div>
               <img className="keisha-headshot" src={keishughhhCodes} alt="Keisha Matthews About" />
            </div>
            <div className="inner-about-container">
               <h2 className="inner-about-header">My Skills</h2>
               <div className="skills-container">
                  <div className="skills-column">
                     <li>HTML5/CSS3</li>
                     <li>JavaScript</li>
                     <li>Jquery</li>
                  </div>
                  <div className="skills-column">
                     <li>React.js</li>
                     <li>MySQL</li>
                     <li>Bootstrap</li>
                  </div>
                  <div className="skills-column">
                     <li>Node.js</li>
                     <li>Express</li>
                     <li>MongoDB</li>
                  </div>
                  <div className="skills-column">
                     <li>Heroku</li>
                     <li>Python</li>
                     <li>Git</li>
                  </div>
               </div>
            </div>
            </div>
         </Layout>
      </div>
   )
}

export default About