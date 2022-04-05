import styled from 'styled-components';



const EditorFeedBackStyles  = styled.div`
    width: 80%;
    margin: 4rem auto 0;
    text-align: center;
`;



const FeedBackMessage  = styled.figcaption`
    font-size: 1.75rem;
    font-weight: 600;
    color:#a3e635 ;
`;

const FeedBack  = styled.figure`
  
`;

const FeedBackOption  = styled.footer`
  button {
      margin: 2rem;
  }
`;


export {EditorFeedBackStyles,FeedBackMessage,FeedBack,FeedBackOption}