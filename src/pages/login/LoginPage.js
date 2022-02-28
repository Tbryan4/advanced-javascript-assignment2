import React from 'react'
import {Link} from "react-router-dom"
import {login} from '../../components/loginprompt/login'

// rfc for shortcut

function LoginPage(props) {
    return (
        <>  
        
            <header>
                <h1>LoginPage</h1>
            </header>
            <ul>
                <li>
                    <Link to="/dashboard">Sign Out</Link>
                    <login/>
                </li>
            </ul>
        </>
    );
}

export default LoginPage