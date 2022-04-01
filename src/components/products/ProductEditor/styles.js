import styled from 'styled-components';



const ProductEditorStyles  = styled.div`
      /* styles */
     
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5rem;

      @media (max-width: 1300px) {
            
            flex-direction: column;
      }
      
`;

export {ProductEditorStyles}