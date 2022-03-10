import React from "react";
import {Container,LogoContainer} from './styles'
import sitelogo from '../../Assets/logo.png'
import { LoginForm } from "../loginform";

 function SidebarLogin(props) {
  return (
    <Container>
      <LogoContainer>
        <img src={sitelogo} alt="site-logo"></img>  
        <h3>SHOE <span>LOCKER</span></h3>
      </LogoContainer>


        <LoginForm>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
        </LoginForm>

    </Container>
  )
}

export default SidebarLogin
