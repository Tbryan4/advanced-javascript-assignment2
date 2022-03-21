import React, {useState} from "react";

import {Container, ContainerFlex,LeftContainer,RightContainer} from './styles'
import { Link } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from 'libs/firebase'

import { Button } from "ui/buttons";




 function InvalidWebsite(props) {

    const [isUser, setIsUser] = useState(false)

  onAuthStateChanged(auth, (user)=> {
    if(user) {
      setIsUser(true)
    }
    else {
      setIsUser(false)
    }
  })
  return (
        <>
        <Container>
            <ContainerFlex>
                <LeftContainer>
                 <div> 
                   <img src="jordan-404-image.png" alt="jordan shoes"></img>
                   </div>
                </LeftContainer>
                <RightContainer>
                    <div>
                      <h1>404</h1>
                      <p>PAGE NOT FOUND :(</p>
                      {
                      //if there is a user link to the dashboard
                      //if there isnt a user link back to homepage
                      isUser? <Link to={"/dashboard"}><Button bc="crimson" width="10rem">Back To Safety</Button></Link> : <Link to={"/"}><Button bc="crimson" width="10rem">Back To Safety</Button></Link>
                      }
                      
                    </div>
                </RightContainer>
            </ContainerFlex>
        </Container>
       
        
        </>
  )
}

export default InvalidWebsite
