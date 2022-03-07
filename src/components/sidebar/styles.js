import styled from "styled-components"


const Container = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-width: 30rem;
    backdrop-filter: blur(5rem);
    background-color: rgba(255,255,255, 0.2);
    height: 100%;
    box-shadow: 1px 1px 20px black;
`

const LogoContainer = styled.div `

font-family: 'Courier New', Courier, monospace;;
  img {
    width: 6rem;
    margin-left: 2.5rem; 
  }

  h3 {
    color: white;
    font-size: 1.5rem;
  }

  span {
    color: black;
  }
`

const Form = styled.form `

h3 {
  margin-bottom:5rem;
}
`

export {
  Container, 
  LogoContainer,
  Form
}

