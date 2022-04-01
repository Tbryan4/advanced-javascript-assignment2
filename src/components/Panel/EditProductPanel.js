import React from 'react'
import { Link } from 'react-router-dom'
import { Location, Container,PannelBody,HeaderContainer } from './styles'
import {ProductEditor} from 'components/products/ProductEditor'

 function EditProductPanel(props) {
  return (
    <>

          <Container>
            <Location>
            <HeaderContainer>
              <h2><Link to={"/Dashboard"}>Dashboard</Link> {'>'} <span>{props.title}</span></h2>
            </HeaderContainer>
            </Location>
            <PannelBody>
              <ProductEditor/>
            </PannelBody>
  
          </Container>
    </>
  )
}

export {EditProductPanel}