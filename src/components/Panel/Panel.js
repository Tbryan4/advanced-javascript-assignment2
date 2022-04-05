import React from 'react'

import { Link } from 'react-router-dom'
import { Location, Container,HeaderContainer, DashboardPannelBody } from './styles'
import {ProductCard} from 'components/products/ProductCard'

import {useGetProducts} from 'hooks/useGetProducts'

import ClipLoader from "react-spinners/ClipLoader"



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
            <DashboardPannelBody>
              {productData? productData.map(product=><ProductCard key={product.uid} product={product}/>) : <aside><ClipLoader className="loading" color='red' size={100}/></aside>}
            </DashboardPannelBody>
  
          </Container>
    </>
  )
}

export default Panel
