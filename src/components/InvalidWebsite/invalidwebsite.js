import React from "react";
import {Container, ContainerFlex,HomeLink} from './styles'
import { Link } from "react-router-dom";



 function InvalidWebsite(props) {
  return (
        <>
        <Container>
            <ContainerFlex>
                <img src='404-image.jpg' alt='404.jpg'></img>
                <div>
                    <h1>404</h1>
                    <p>WHOOPS... This page is not avaliable</p> <p><Link to={"/dashboard"}> Home</Link></p>
                </div>
            </ContainerFlex>

            <HomeLink></HomeLink>
        </Container>
       
        
        </>
  )
}

export default InvalidWebsite
