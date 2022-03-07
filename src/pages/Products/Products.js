import React from 'react'
import { AppBar } from '../../components/appbar';
import {auth} from "./../../libs/firebase"



// rfc for shortcut


function ProductsPage(props) {
    console.log(auth)
    return (
        <>  
        <AppBar></AppBar>
        <h1 className='main-page-header'>Products</h1>
        </>
    );
}

export default ProductsPage