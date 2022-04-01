import React from 'react';

import {ProductPreviewStyles,ProductImages,ProductName,ProductPrice,ProductDescription} from './styles'


function ProductPreview ({children,productName,productPrice,productImage,productDescription, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
            <ProductImages>
              <img src={productImage} alt='shoe preview img' width='320px' height='50px'></img>
            </ProductImages>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDescription}</ProductDescription>

        </ProductPreviewStyles>
  )
}

export default ProductPreview