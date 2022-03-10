import React from 'react'
import Login  from '../../components/loginprompt/Login'
import {auth} from "./../../libs/firebase"



// rfc for shortcut
// jsconfig.json if you dont right ./ the app will assume that you are starting from the src dirtectory

function LoginPage(props) {
    console.log(auth)
    return (
        <>  
        <Login/>
        </>
    );
}

export default LoginPage