import React, {useState} from 'react';

import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor';
import {useNumberFormat} from '../../../hooks/useNumberFormat'
import ProductPreview from 'Assets/jordan-404-image.png'

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name')
  const [productPrice,setProductPrice] = useState('100')
  const [productImage,setProductImage]= useState(ProductPreview)
  const [productDescription,setProductDescription] = useState('Product Description')

  const formatter = useNumberFormat()
  console.log(productPrice)
  function handleProductName(name) {
    //we send a function to the data entry form which returns the input field which uses the on change function
    // to contiusly grab the inputted value which returns the value here and changes the state of product name to it current name

    //then we send the product name as a paramter to the product name html which changes the value of the text
    setProductName(name)
  }

  function handleProductPrice(price) {
    setProductPrice(formatter(price))
  }

  function handleProductDescription(description) {
    setProductDescription(description)
  }
  return (
        <AddProductStyles  {...props}>
           <ProductEditor 
           productName={productName} 
           productPrice={productPrice}
           productImage={productImage}
           productDescription={productDescription}

           handleProductName={handleProductName} 
           handleProductPrice={handleProductPrice}
           handleProductDescription={handleProductDescription}
           
           setProductImage={setProductImage}
           
           />
          

        </AddProductStyles>
  )
}

export default AddProduct