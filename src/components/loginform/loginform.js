import React, {useState} from "react";
import {Container,LoginFormStyles,FormControl,ForgotPassword,AlternativeSignIn} from './styles'
import {Label} from './../../ui/forms/label'
import {Input} from './../../ui/forms/input'
import {SubmitButton} from '../../ui/buttons'
import {Link} from "react-router-dom"



 function LoginForm({props}) {

  //calls setemail function and assigns the email value with e.target.value
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function onLoginRequest(e) {
    console.log(email,password)

  }
  return (
    <Container>
      <form onSubmit={onLoginRequest}>
        <LoginFormStyles>
          <h2>LOGIN</h2>
          <FormControl>
            <Label color="black" htmlFor="email">Email</Label>
            <Input required placeholder="ShoeLocker@gmail.com" id="email"
            onChange={(e)=>setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <Label color="black" htmlFor="password">Password</Label>
            <Input required placeholder="IloveShoes123" type="text" id="password"
            onChange={(e) =>setPassword(e.target.value)}/>
          </FormControl>

          <FormControl>
            <div>
              <input type="checkbox" />
              <p>Remember Me?</p>
            </div>
          </FormControl>

          <FormControl>
            <Link to="/dashboard"><SubmitButton type="submit" padding="0.6rem">Sign In</SubmitButton></Link>
          </FormControl>

        </LoginFormStyles>
      </form>

       {/* <ForgotPassword><p>Forgot password?</p></ForgotPassword>  */}

      <AlternativeSignIn>
        <p>OR</p>
        <div>
          <a href="https://www.facebook.com/"><img src="facebook-icon.png" alt="facebook-icon"></img></a>
          <a href="https://myaccount.google.com/"><img className="google" src="google-icon.png" alt="google-icon"></img></a>
          <a href="https://twitter.com/home?lang=en"><img src="twitter-icon.png" alt="twitter-icon"></img></a>
        </div>
      </AlternativeSignIn>
    </Container>
  )
}

export default LoginForm
