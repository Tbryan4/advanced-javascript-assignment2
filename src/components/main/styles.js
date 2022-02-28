import styled from "styled-components"
import background from "../../Assets/login-background-alternative.jpeg"

const Container = styled.div `
    background-image: url(${background});
    background-Position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;


    h1 {
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.3rem;
      font-weight: 600;
      text-shadow: 1px 1px 3px whitesmoke;
      color: white;
      
    }
`

export {
  Container  
}