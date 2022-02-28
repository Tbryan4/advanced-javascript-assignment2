import React from 'react'
import {Link} from "react-router-dom"
import { Login } from '../../components/loginprompt'



// rfc for shortcut


function LoginPage(props) {
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