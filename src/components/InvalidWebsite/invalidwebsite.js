import React, {useState} from "react";
import {Container, ContainerFlex,HomeLink} from './styles'
import { Link } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from 'libs/firebase'




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
                <img src='404-image.jpg' alt='404.jpg'></img>
                <div>
                    <h1>404</h1>
                    {
          //if there is a user link to the dashboard
          //if there isnt a user link back to homepage
          isUser? <Link className="HomeLink" to={"/dashboard"}>back to safety</Link> : <Link to={"/"}>back to safety</Link>
        }
                </div>
            </ContainerFlex>

            <HomeLink></HomeLink>
        </Container>
       
        
        </>
  )
}

export default InvalidWebsite
