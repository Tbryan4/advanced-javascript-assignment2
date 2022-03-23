import { Panel } from 'components/Panel';
import React from 'react'
import { AppBar } from '../../components/appbar';
import {auth} from "../../libs/firebase"
import {AddProductPanel} from 'components/Panel/AddProductPanel'



// rfc for shortcut


function AddNewProductsPage(props) {
    const pageName = "Add Products"
    return (
        <>  
        <AppBar></AppBar>
        <AddProductPanel title={pageName}/>
        </>
    );
}

export default AddNewProductsPage