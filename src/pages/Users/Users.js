import React from 'react'
import { AppBar } from '../../components/appbar';
import {auth} from "./../../libs/firebase"



// rfc for shortcut


function UserPage(props) {
    console.log(auth)
    return (
        <>  
        <AppBar>
        
        </AppBar>
        <h1 className='main-page-header'>Users</h1>
        </>
    );
}

export default UserPage