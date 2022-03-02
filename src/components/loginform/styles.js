import styled from "styled-components"


const Container = styled.div `
h3,h2,p,label {
  font-family: 'Courier New',Courier,monospace;
}
`

const LoginFormStyles = styled.section`
  
  
  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;
const FormControl = styled.div`
  margin: 1.25rem 0;

 div {
   display: flex;
   align-items: center;
 }

 div p {
   margin-left: 0.5rem;
   font-size: 0.8rem;
 }

 div input {
  accent-color: red;
 }
`;

const ForgotPassword = styled.div `
  p {
    color: white;
    text-align: center;
    font-size: 0.7rem;
    cursor: pointer;
    text-shadow: 1px 1px 1px black;
    margin-top: 1rem;
  }
`

const AlternativeSignIn = styled.div `
  p {
    text-align: center;
    padding: 0.8rem;
    margin: 0 auto;
    margin-top: 0.3rem;
  }

  div {
    display: flex;
    justify-content:space-evenly;
  }

  img {
    width: 2rem;
    cursor: pointer;
  }

  .google {
    width: 2.1rem ;
  }

  img:hover {
    width: 2.4rem;
    transition: ease-in-out 0.5s;
    background-color: white;
    border-radius: 2rem;
  }
`


export {
  Container, 
  LoginFormStyles,
  FormControl,
  ForgotPassword,
  AlternativeSignIn
}

