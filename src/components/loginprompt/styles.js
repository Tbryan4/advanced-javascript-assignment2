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
`

export {
  Container  
}