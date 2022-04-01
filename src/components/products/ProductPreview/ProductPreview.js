import React from 'react';

import {ProductPreviewStyles,ProductImage,ProductName,ProductPrice,ProductDescription} from './styles'


function ProductPreview ({children, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
            <ProductImage><img src='jordan-404-image.png' alt='shoe preview img'></img></ProductImage>
            <ProductName>Jordan 3 Grey</ProductName>
            <ProductPrice>$100</ProductPrice>
            <ProductDescription>Lorem Ipsum is simply dummy text of the printing and typesetting</ProductDescription>

        </ProductPreviewStyles>
  )
}

export default ProductPreview