import React from 'react'
import {Link} from "react-router-dom"
import { Login } from '../../components/loginprompt'
import {auth} from "./../../libs/firebase"



// rfc for shortcut


function LoginPage(props) {
    console.log(auth)
    return (
        <>  
        <Login/>
            {/* <header>
                <h1>LoginPage</h1>
            </header>
            <ul>
                <li>
                    <Link to="/dashboard">Sign Out</Link>
                </li>
            </ul> */}
        </>
    );
}

export default LoginPage