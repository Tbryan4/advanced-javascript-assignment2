import React from 'react'
import Login  from '../../components/loginprompt/Login'
import {auth} from "./../../libs/firebase"



// rfc for shortcut


function LoginPage(props) {
    console.log(auth)
    return (
        <>  
        <Login/>
        </>
    );
}

export default LoginPage