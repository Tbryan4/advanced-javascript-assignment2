import styled from 'styled-components';



const ProductPreviewStyles  = styled.div`
      /* styles */
      background-color: crimson;
      height: 25rem;
      margin-bottom: 30rem;
      width: 21rem;

      border-radius: 10px;
      box-shadow: 0px 0px 5px 0px black;
      margin-top:6rem;
      
      div,h2,p {
        display: flex;
        justify-content: center;
      }

      h2,p {
        padding-top:1rem;
        color: white;
        font-weight: bold;
        text-align: center;
      }

      @media (max-width: 1300px) {
            
        margin-bottom: 1rem;
      }
      
`;

const ProductImages = styled.div `
    margin: 1rem auto 0;
    width: 300px;
   
    img {
      max-width: 13rem;
      max-height: 10rem;
        
    }
`



const ProductName = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.5px;
`;


const ProductPrice = styled.p`
  font-size: 2rem;
`;



const ProductDescription = styled.p`
  font-size: 1rem;
`;






export {ProductPreviewStyles,ProductName,ProductPrice,ProductDescription,ProductImages}