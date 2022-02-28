import React from 'react'
import {Link} from "react-router-dom"

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
                </li>
            </ul>
        </>
    );
}

export default LoginPage