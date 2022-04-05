import React, {useState} from 'react';

import { useAddNewProduct } from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import { ProductEditor } from 'components/products/ProductEditor';
import {useNumberFormat} from '../../../hooks/useNumberFormat'
import ProductPreview from 'Assets/jordan-404-image.png'
import { EditorFeedBack } from 'components/products/EditorFeedBack';

function AddProduct ({children, ...props})  {

  const defaults = {
    description: `Product Description`,
    name: "Product Name",
    price: "100"

  }

  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice,setProductPrice] = useState(defaults.price)
  const [productImage,setProductImage]= useState({previewImage:ProductPreview, file:null})
  const [productDescription,setProductDescription] = useState(defaults.description)
  const [loading,productLoader]= useAddNewProduct()



  const formatter = useNumberFormat()
  
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

  function handleSubmit(e) {
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData,productImage.file)
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
    
  }

  if(isWriting) {
    return <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>
  }
  else {
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
           handleSubmit={handleSubmit}
           
           setProductImage={setProductImage}
           
           />
          

        </AddProductStyles>
  )
  }
}

export default AddProduct