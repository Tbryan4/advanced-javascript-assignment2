import React from 'react'
import { AppBar } from '../../components/appbar';
import {auth} from "./../../libs/firebase"



// rfc for shortcut


function Orders(props) {
    console.log(auth)
    return (
        <>  
        <AppBar></AppBar>
        <h1 className='main-page-header'>Orders</h1>
        </>
    );
}

export default Orders