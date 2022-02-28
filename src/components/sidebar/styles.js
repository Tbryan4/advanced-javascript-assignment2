import styled from "styled-components"


const Container = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    min-width: 13rem;
    backdrop-filter: blur(5rem);
    background-color: rgba(255,255,255, 0.2);
    height: 100%;
`

const LogoContainer = styled.div `

font-family: 'Courier New', Courier, monospace;;
  img {
    width: 3rem;
    margin-left: 2rem; 
  }

  h3 {
    color: white;
    font-size: 1rem;
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

