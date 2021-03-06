import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import '../styles/index.css'
import landingStyles from '../styles/landing.module.css'
import logo from '../images/keishughhh-codes.png'

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf=8" />
        <title>Keisha Matthews</title>
        <meta name="description" content="About Keisha - Keisha is a software developer and designer based in Nashville, TN. When Keisha's not coding, she's exploring new technologies and true crime documentaries." />
      </Helmet>
      <Layout>
        <div className="index-container">
          <h1 className={landingStyles.hello}>Hi, I'm Keisha Matthews.</h1>
          <h2 className={landingStyles.info}>Keisha is a software developer and designer based in Nashville, TN. When Keisha's not coding, she's exploring new technologies and true crime documentaries.</h2>
          <div className={landingStyles.surroundingDiv}>
            <img className={landingStyles.me} src={logo} alt="Keisha"></img>
          </div>
        </div>
        <div className={landingStyles.contactInfo}>
          <a href="https://www.linkedin.com/in/keisha-matthews-794a55189" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="inner-about-contact" /></a>
          <a href="https://www.github.com/kmmatthews15" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="inner-about-contact" /></a>
          <a href="https://www.instagram.com/keishughhh.codes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="inner-about-contact" /></a>
          <a href="mailto:keishughhhcodes@gmail.com?subject=Keisha Inquiry"><FontAwesomeIcon icon={faEnvelopeSquare} className="inner-about-contact" /></a>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage