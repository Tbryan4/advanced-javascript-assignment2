import React from 'react';

import {ProductDataEntryFormStyles,ProductImage,ProductName,ProductPrice,ProductDescription, FormContainer} from './styles'
import { ProductImageDropBox } from '../ProductImageDropBox';
import {Label, Input} from 'ui/forms'
import {TextArea} from 'ui/forms/textarea'

function ProductDataEntryForm ({children, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
           <FormContainer>
             <ProductImage>
              <Label>Product Image</Label>
              <ProductImageDropBox/>
             </ProductImage>
  
             <ProductName>
              <Label>Product Name</Label>
              <Input/>
             </ProductName>
  
             <ProductPrice>
              <Label>Product Price</Label>
              <Input/>
             </ProductPrice>
  
             <ProductDescription>
              <Label>Product Description</Label>
              <Input/>
             </ProductDescription>
           </FormContainer>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm