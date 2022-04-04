import styled from 'styled-components';



const ProductDataEntryFormStyles  = styled.form`
      
      display: flex;
      margin-bottom: 30rem;
      

      input:focus, textarea:focus {
            border-color: crimson;
            background-color: #eff6ff;
            outline-color: crimson;
      }

      div {
            padding-top: 1rem;
      }

      margin-top: 3rem;

      @media (max-width: 1300px) {
            
            margin-bottom: 0rem;
          }
`;

const ProductImage  = styled.div`
  
      width: 500px;
      
`;

const ProductName  = styled.div`
     input {
            height: 3rem;
      }
`;

const ProductPrice  = styled.div`
      input {
            height: 3rem;
      }
`;
const ProductDescription  = styled.div`
      
      input {
            height: 3.5rem;
      }
      
`;



const FormContainer = styled.div`
  
`;

const SubmitButtonContainer = styled.div `
      display: flex;
      justify-content: center;
      button {
            width: 31.2rem;
      }
`;



export {FormContainer,ProductDataEntryFormStyles,ProductImage,ProductName,ProductPrice,ProductDescription,SubmitButtonContainer}