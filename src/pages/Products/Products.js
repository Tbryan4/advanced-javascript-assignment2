import React from 'react'

import { AppBar } from '../../components/appbar';
import {auth} from "./../../libs/firebase"
import {Panel} from 'components/Panel'
import { Link } from 'react-router-dom'



// rfc for shortcut


function ProductsPage(props) {
    const pageName = "View All Products"
    return (
        <>  
        <AppBar></AppBar>
        <Panel title={pageName}></Panel>
        </>
    );
}

export default ProductsPage