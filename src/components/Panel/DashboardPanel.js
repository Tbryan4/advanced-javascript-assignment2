import React from 'react'
import { Link } from 'react-router-dom'
import { Location, Container,PannelBody,HeaderContainer } from './styles'
import {ProductCard} from 'components/products/ProductCard'

 function DashboardPanel(props) {
  return (
    <>

          <Container>
            <Location>
            <HeaderContainer>
              <h2><Link to={"/Dashboard"}>Dashboard</Link> {'>'}  <span>{props.title}</span>   </h2>
            </HeaderContainer>
 
            </Location>
            <PannelBody>
              
            </PannelBody>
  
          </Container>
    </>
  )
}

export default DashboardPanel
