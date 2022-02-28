import styled from "styled-components"


const Container = styled.div `
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

form > input {
  margin-top: 1rem;
  max-width: 15rem;
  height: 1.3rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #f5f5f5;
  box-shadow: 1px 2px 4px 0.1px black;
  padding:0 1rem;
  transition: 0.5s;

  &:hover {
    transform: translateY(-2px)
  }

  #submit {
    width: 5rem;
  }
}

h3 {
  font-family: 'Courier New',Courier,monospace;
}
`


export {
  Container, 
  
}

