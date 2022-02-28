import React from "react";
import {Container,LogoContainer,Form} from './styles'
import sitelogo from '../../Assets/logo.png'

 function SidebarLogin(props) {
  return (
    <Container>
      <LogoContainer>
        <img src={sitelogo} alt="site-logo"></img>  
        <h3>SHOE <span>LOCKER</span></h3>
      </LogoContainer>
      <Form>
        <h3>Log In</h3>
      </Form>
    </Container>
  
  )
}

export default SidebarLogin
