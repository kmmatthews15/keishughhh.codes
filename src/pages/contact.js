import React from 'react'
import Layout from '../components/layout'
import '../styles/contact.css'
import '../styles/projects.css'
import reachOut from '../images/reach-out.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
   return (
      <div>
         <Layout>
            <div className="contact-container">
               <div className="contact-left">
                  <img src={reachOut} className="reach-out" alt="pic"></img>
               </div>
               <div className="contact-right">
                  <p className="connect-header">Let's connect!!</p>
                  <p className="connect-info"> Feel free to stop by and have a chat at any of the social links below!
            </p>
                  <div>
                     <a href="https://www.linkedin.com/in/keisha-matthews-794a55189" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="inner-about-contact" /></a>
                     <a href="https://www.github.com/kmmatthews15" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="inner-about-contact" /></a>
                     <a href="https://www.instagram.com/keishughhh.codes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="inner-about-contact" /></a>
                     <a href="mailto:keishughhhcodes@gmail.com?subject=Keisha Inquiry"><FontAwesomeIcon icon={faEnvelopeSquare} className="inner-about-contact" /></a>
                  </div>
               </div>
            </div>
         </Layout>
      </div>
   )
}

export default Contact