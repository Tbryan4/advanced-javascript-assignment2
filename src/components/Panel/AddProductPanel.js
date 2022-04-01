import React from 'react'
import { Link } from 'react-router-dom'
import { Location, Container,PannelBody,HeaderContainer } from './styles'
import { AddProduct } from 'components/widgets/AddProduct'

 function AddProductPanel(props) {
  return (
    <>

          <Container>
            <Location>
            <HeaderContainer>
              <h2><Link to={"/Dashboard"}>Dashboard</Link> {'>'} <span>Add Products</span></h2>
            </HeaderContainer>
            </Location>
            <PannelBody>
              <AddProduct/>
            </PannelBody>
  
          </Container>
    </>
  )
}

export {AddProductPanel}