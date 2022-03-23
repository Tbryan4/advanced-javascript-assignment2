import { Panel } from 'components/Panel';
import React from 'react'
import { AppBar } from '../../components/appbar';
import {auth} from "../../libs/firebase"
import {AddProductPanel} from 'components/Panel/AddProductPanel'



// rfc for shortcut


function AddNewProductsPage(props) {
    console.log(auth)
    return (
        <>  
        <AppBar></AppBar>
        <AddProductPanel/>
        </>
    );
}

export default AddNewProductsPage