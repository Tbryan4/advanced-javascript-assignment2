import React from "react";
import {Container} from './styles'


 function LoginForm({type,placeholder}) {
  return (
    <Container>
    <form>
        <input id="email" required type= "text"></input>
        <input id="password" required type= "text"></input>
        <input id="submit" type="submit"></input>
    </form>
    </Container>
  )
}

export default LoginForm
