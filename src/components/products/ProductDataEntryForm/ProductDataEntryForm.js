import React from 'react';

import {ProductDataEntryFormStyles,ProductImage,ProductName,ProductPrice,ProductDescription, FormContainer,SubmitButtonContainer} from './styles'
import { ProductImageDropBox } from '../ProductImageDropBox';
import {Label, Input} from 'ui/forms'

import { SubmitButton } from 'ui/buttons';

function ProductDataEntryForm ({children,handleSubmit,handleProductName,handleProductPrice,setProductImage,handleProductDescription, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
           <FormContainer>
             <ProductImage>
              <Label>Product Image</Label>
              <ProductImageDropBox setProductImage={setProductImage}/>
             </ProductImage>
  
             <ProductName>
              <Label>Product Name</Label>
              <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={21}/>
             </ProductName>
  
             <ProductPrice>
              <Label>Product Price</Label>
              <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
             </ProductPrice>
  
             <ProductDescription>
              <Label>Product Description</Label>
              <Input onChange={(e)=>handleProductDescription(e.target.value.trim())} maxLength={35}/>
             </ProductDescription>

             <SubmitButtonContainer>
              <SubmitButton> Submit </SubmitButton>
             </SubmitButtonContainer>
           </FormContainer>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm