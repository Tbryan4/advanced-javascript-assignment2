import styled from 'styled-components';



const ProductDataEntryFormStyles  = styled.form`
      width: 380px;

      input:focus, textarea:focus {
            border-color: crimson;
            background-color: #eff6ff;
            outline-color: crimson;
      }

      fieldset {
            display:flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
      }
`;

const ProductImage  = styled.div`
      
`;

const ProductName  = styled.div`
      flex: 3.5;
`;

const ProductPrice  = styled.div`
      flex:1.5;
`;
const ProductDescription  = styled.div`
      
`;

export {ProductDataEntryFormStyles,ProductImage,ProductName,ProductPrice,ProductDescription}