import React from 'react';

import {ProductCardStyles,CardContainer,ShoeFlex,IconFlex} from './styles'
import {IoIosStar} from 'react-icons/io';
import {Button} from 'ui/buttons'

function ProductCard ({children,product, ...props})  {
  const {productName, productPrice,imageUrl,productDescription} = {...product}
  return (
        <ProductCardStyles  {...props}>
          <CardContainer className='product-card'>
            <ShoeFlex>
              <img src={imageUrl} alt='shoe'></img>
            </ShoeFlex>
            <ShoeFlex>
              <h3>{productName}</h3>
            </ShoeFlex>
            <ShoeFlex>
              <p>{productDescription}</p>
            </ShoeFlex>
            <ShoeFlex>
              <p className='price'>{productPrice}</p>
            </ShoeFlex>

            <IconFlex>
              <Button className='buy-now' bc="black" width="10rem" height="2.5rem" box-shadow="0" border-radius="10rem"> Buy Now </Button>
              <IoIosStar className='icon'/>
            </IconFlex>
          </CardContainer>

        
         
        </ProductCardStyles>
  )
}

export default ProductCard