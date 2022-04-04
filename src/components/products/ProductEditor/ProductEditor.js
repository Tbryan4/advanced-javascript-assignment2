import React from 'react';

import {ProductDataEntryForm} from "./../ProductDataEntryForm"
import {ProductPreview} from "./../ProductPreview"

import {ProductEditorStyles} from './styles'

function ProductEditor ({children,productPrice, productName,productImage,productDescription,handleSubmit,handleProductName,handleProductPrice,handleProductDescription,setProductImage, ...props})  {
  
  return (
        <ProductEditorStyles  {...props}>
           <ProductDataEntryForm 
           handleProductName={handleProductName}
           handleProductPrice={handleProductPrice}
           handleProductDescription={handleProductDescription}
           handleSubmit={handleSubmit}
           setProductImage={setProductImage} />
           <ProductPreview 
           productName={productName}
           productPrice={productPrice}
           productImage={productImage}
           productDescription={productDescription}/>

        </ProductEditorStyles>
  )
}

export default ProductEditor