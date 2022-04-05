import React from 'react'

import { Link } from 'react-router-dom'
import { Location, Container,PannelBody,HeaderContainer } from './styles'
import {ProductCard} from 'components/products/ProductCard'

import {useGetProducts} from 'hooks/useGetProducts'

 function Panel(props) {
    const productData = useGetProducts()
  return (
    <>

          <Container>
            <Location>
            <HeaderContainer>
              <h2><Link to={"/Dashboard"}>Dashboard</Link> {'>'}  <span>{props.title}</span>   </h2>
            </HeaderContainer>
 
            </Location>
            <PannelBody>
              {productData? productData.map(product=><ProductCard key={product.uid} product={product}/>) : <p>Spinner react spinners</p>}
            </PannelBody>
  
          </Container>
    </>
  )
}

export default Panel
