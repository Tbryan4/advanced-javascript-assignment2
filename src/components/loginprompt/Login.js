import React from 'react'
import {Container} from './styles'
import {SidebarLogin} from '../sidebar'
import {Main} from '../main'

 function Login(props) {
  return (
    <Container>
      <SidebarLogin/>
      <Main/>
    </Container>
  
  )
}

export default Login
