import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import {signInWithEmailAndPassword} from "firebase/auth"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



import {auth} from './../../libs/firebase'
import {Container,LoginFormStyles,FormControl,ForgotPassword,AlternativeSignIn,notify} from './styles'
import {Label} from './../../ui/forms/label'
import {Input} from './../../ui/forms/input'
import {SubmitButton} from '../../ui/buttons'


//firebase imports




 function LoginForm({props}) {

  //return a function that gives a programming link
  const navigator = useNavigate()
  //calls setemail function and assigns the email value with e.target.value
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function onLoginRequest(e) {
      //auth connects to the sign in service using email and password
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password)
      // then waits for the sign and password to be returned as a true value
      .then(userCrediental=> {
        // move dashboard page
        // use navigate() react router
        navigator('all')
      })
      .catch(error => {
        notify(error)
      })
      
  }
  return (
    <Container>
      {/* calls onloginrequest function on submit */}
      <form onSubmit={onLoginRequest}>
        <LoginFormStyles>
        <ToastContainer/>
            <h2>LOGIN</h2>
            <FormControl>
              <Label color="black" htmlFor="email">Email</Label>
              <Input placeholder="ShoeLocker@gmail.com" id="email"
              // inline function watch for changes of the target input value and assign that value to email
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              />
            </FormControl>
  
            <FormControl>
              <Label color="black" htmlFor="password">Password</Label>
              <Input placeholder="Your Account Password" type="password" id="password" 
              onChange={(e) =>setPassword(e.target.value)}
            />
            </FormControl>
  
            <FormControl>
              <div>
                <input type="checkbox" />
                <p>Remember Me?</p>
              </div>
            </FormControl>
  
            <FormControl>
              {/* <Link to="/dashboard"><SubmitButton type="submit" padding="0.6rem">Sign In</SubmitButton></Link> */}
              <SubmitButton type="submit" padding="0.6rem">Sign In</SubmitButton>
            </FormControl>
        </LoginFormStyles>
      </form>

      

      <AlternativeSignIn>
        <p>OR</p>
        <div>
          <a href="https://www.facebook.com/"><img src="facebook-icon.png" alt="facebook-icon"></img></a>
          <a href="https://myaccount.google.com/"><img className="google" src="google-icon.png" alt="google-icon"></img></a>
          <a href="https://twitter.com/home?lang=en"><img src="twitter-icon.png" alt="twitter-icon"></img></a>
        </div>
      </AlternativeSignIn>

     <ForgotPassword><p>Forgot password?</p></ForgotPassword>  
    </Container>
  )
}

export default LoginForm
