import React from 'react';

import {ProductCardStyles,CardContainer,ShoeFlex,IconFlex} from './styles'
import {IoIosStar} from 'react-icons/io';
import {Button} from 'ui/buttons'

function ProductCard ({children, ...props})  {
  return (
        <ProductCardStyles  {...props}>
          <CardContainer className='product-card'>
            <ShoeFlex>
              <img src='air-jordan-one.png' alt='shoe'></img>
            </ShoeFlex>
            <ShoeFlex>
              <h3>Nike X OFF-white</h3>
            </ShoeFlex>
            <ShoeFlex>
              <p>The 10: Air Jordan 1 off-white - Chicago</p>
            </ShoeFlex>
            <ShoeFlex>
              <p className='price'>$500</p>
            </ShoeFlex>

            <IconFlex>
              <Button className='buy-now' bc="black" width="10rem" height="2.5rem" box-shadow="0" border-radius="10rem"> Buy Now </Button>
              <IoIosStar className='icon'/>
            </IconFlex>
          </CardContainer>

        
          <CardContainer className='product-card' bc='#4bb7e6'>
            <ShoeFlex>
              <img src='air-jordan-one-blue.png' alt='shoe'></img>
            </ShoeFlex>
            <ShoeFlex>
              <h3>Nike X OFF-white</h3>
            </ShoeFlex>
            <ShoeFlex>
              <p>The 10: Air Jordan 1 off-white - UNC</p>
            </ShoeFlex>
            <ShoeFlex>
              <p className='price'>$600</p>
            </ShoeFlex>

            <IconFlex>
              <Button className='buy-now' bc="black" width="10rem" height="2.5rem" box-shadow="0" border-radius="10rem"> Buy Now </Button>
              <IoIosStar className='icon'/>
            </IconFlex>
          </CardContainer>

          <CardContainer className='product-card' bc='#ff4500
'>
            <ShoeFlex>
              <img src='jordan-one-orange.png' alt='shoe'></img>
            </ShoeFlex>
            <ShoeFlex>
              <h3>Jordan 1 - Orange</h3>
            </ShoeFlex>
            <ShoeFlex>
              <p>The 1: Air Jordan 1  - Orange</p>
            </ShoeFlex>
            <ShoeFlex>
              <p className='price'>$700</p>
            </ShoeFlex>

            <IconFlex>
              <Button className='buy-now' bc="black" width="10rem" height="2.5rem" box-shadow="0" border-radius="10rem"> Buy Now </Button>
              <IoIosStar className='icon'/>
            </IconFlex>
          </CardContainer>

          <CardContainer className='product-card' bc='crimson
'>
            <ShoeFlex>
              <img src='jordan-one-blred.png' alt='shoe'></img>
            </ShoeFlex>
            <ShoeFlex>
              <h3>Jordan 1 - Black and Red</h3>
            </ShoeFlex>
            <ShoeFlex>
              <p>The 1: Air Jordan 1 - Black and Red</p>
            </ShoeFlex>
            <ShoeFlex>
              <p className='price'>$700</p>
            </ShoeFlex>

            <IconFlex>
              <Button className='buy-now' bc="black" width="10rem" height="2.5rem" box-shadow="0" border-radius="10rem"> Buy Now </Button>
              <IoIosStar className='icon'/>
            </IconFlex>
          </CardContainer>

          
          <CardContainer className='product-card' bc='#8b4513
'>
            <ShoeFlex>
              <img src='jordan-one-brown.png' alt='shoe'></img>
            </ShoeFlex>
            <ShoeFlex>
              <h3>Jordan 1 - Brown</h3>
            </ShoeFlex>
            <ShoeFlex>
              <p>The 1: Air Jordan 1 -Brown </p>
            </ShoeFlex>
            <ShoeFlex>
              <p className='price'>$700</p>
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