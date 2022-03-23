
import React from 'react'

import { AppBar } from '../../components/appbar';
import {AddProductPanel} from 'components/Panel/AddProductPanel'
import {PannelBody } from 'components/Panel/styles'
import {ProductCard} from 'components/products/ProductCard'



// rfc for shortcut


function AddNewProductsPage(props) {
    const pageName = "Add Products"
    return (
        <>  
        <AppBar></AppBar>
        <AddProductPanel title={pageName}/>
        <PannelBody>
            
        </PannelBody>
        </>
    );
}

export default AddNewProductsPage