import React from "react"
import { Container,Message } from "semantic-ui-react"
import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"
export default function Contact(){
return(
    <div style={{position:"relative",minHeight:700}}>
    <Container>
      <Header />
        <Menu />
       <br />
       <div>
           <h1>Contact Us</h1>
           <br />
           <p>Please contact us through the following email addresses:</p>
  <Message style={{width:400}}>
  <a href="jutech490@gmail.com">jutech490@gmail.com</a>
  <h4>Ezeugwu Justice Chiemerie</h4>
  <h5>CEO jutechc Software</h5>
  </Message>
  <Message style={{width:400}}>
  <a href="michael4div@gmail.com">michael4div@gmail.com</a>
  <h4>Michael Scotfield</h4>
  <h5>Media Influencer </h5>

  </Message>
   
       </div>
       </Container>  
       <br />
       <br />
       <Footer /> 
    </div>
)

}