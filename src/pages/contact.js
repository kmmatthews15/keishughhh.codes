import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Container = styled.div`
   text-align: center;
   margin: 0!important;
`

const Socials = styled.div` 
   margin-top: 2rem;
   margin-left: 290px;
   float: left;
   height: 100%;
   @media only screen and (max-width: 1400px) {
      margin-left: 16rem;
   }
   @media only screen and (max-width: 700px) {
      margin-left: 9rem;
   }
`

const Wrapper = styled.section`
   margin-top: 15rem;
   margin-left: 26rem;
   float: left;
   height: 100%;
   overflow: hidden;
   width: 45%;
   @media only screen and (max-width: 1400px) {
      margin-left: 5rem;
      width: 77%;
    }
   @media only screen and (max-width: 600px) {
      margin-left: 5rem;
      width: 77%;
   }
`

const Header = styled.p`
   font-size: 20px;
   font-weight: 600;
`

const Info = styled.p`
   font-size: 16px;
   width: 80%;
   text-align: center;
   margin: 0 auto;
   margin-bottom: 30px;
`


class ContactPage extends React.Component {
   render() {
      return (
         <div>
         <Layout>
            <Container>
            <Wrapper>
               <Header>Let's Connect</Header>
               <Info>Feel free to stop by anf have a chat at any of the social
                  links below!
               </Info>
            <Socials>
            <a href="https://www.linkedin.com/in/keisha-matthews-794a55189" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="inner-about-contact" /></a>
            <a href="https://www.github.com/kmmatthews15" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="inner-about-contact" /></a>
            <a href="https://www.instagram.com/keishughhh.codes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="inner-about-contact" /></a>
            <a href="mailto:keishughhhcodes@gmail.com?subject=Keisha Inquiry"><FontAwesomeIcon icon={faEnvelopeSquare} className="inner-about-contact" /></a>
            </Socials>
            </Wrapper>
            </Container>
         </Layout>
      </div>
      )
   }
}

export default ContactPage