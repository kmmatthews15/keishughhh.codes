import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components';
import reachOut from '../images/reach-out.png'

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
   @media (max-width: 1400px) {
      margin-left: 350px;
   }
   @media (max-width: 1300px) {
      margin-left: 290px;
   }
   @media (max-width: 1000px) {
      margin-left: 220px;
   }
`

const Wrapper = styled.section`
   margin-top: 8rem;
   margin-left: 70px;
   float: left;
   height: 100%;
   @media (max-width: 1400px) {
      display: none;
    }
   overflow: hidden;
   width: 45%;
`

const Right = styled.section`
   padding-top: 20rem;
   margin-right: 150px;
   text-align: center;
   float: right;
   margin-top: 6%;
   width: 35%;
   font-size: 18px;
   border-left: 5px solid white;
   padding-left: 70px;
   margin-bottom: 0px;
   @media (max-width: 1400px) {
     width: 100%;
     font-size: 14px;
     margin-right: 0px;
     border: none;
     margin-bottom: 50px;
     padding-top: 10vw;
     margin-top: 20%;
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
                  <img src={reachOut} className="reach-out" alt="pic"></img>
               </Wrapper>
            </Container>
            <Right>
               <Header>Let's Connect</Header>
               <Info>Feel free to stop by anf have a chat at any of the social
                  links below!
               </Info>
            </Right>
            <Socials>
            <a href="https://www.linkedin.com/in/keisha-matthews-794a55189" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="inner-about-contact" /></a>
            <a href="https://www.github.com/kmmatthews15" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="inner-about-contact" /></a>
            <a href="https://www.instagram.com/keishughhh.codes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="inner-about-contact" /></a>
            <a href="mailto:keishughhhcodes@gmail.com?subject=Keisha Inquiry"><FontAwesomeIcon icon={faEnvelopeSquare} className="inner-about-contact" /></a>
            </Socials>
         </Layout>
      </div>
      )
   }
}

export default ContactPage