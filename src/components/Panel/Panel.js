import React from 'react'
import { Link } from 'react-router-dom'
import { Location, Container,PannelBody,HeaderContainer } from './styles'

 function Panel(title, ...props) {
  return (
    <>

          <Container>
            <Location>
            <HeaderContainer>
              <h2><Link to={"/Dashboard"}>Dashboard -</Link>   </h2>
            </HeaderContainer>
 
            </Location>
            <PannelBody>
  
            </PannelBody>
  
          </Container>
    </>
  )
}

export default Panel
