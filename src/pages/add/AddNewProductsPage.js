
import React, {useState} from 'react'

import {onAuthStateChanged} from 'firebase/auth'
import { auth } from 'libs/firebase';
import { useNavigate } from 'react-router-dom';

import { AppBar } from '../../components/appbar';
import {AddProductPanel} from 'components/Panel/AddProductPanel'
import {PannelBody } from 'components/Panel/styles'



// rfc for shortcut


function AddNewProductsPage(props) {
    const pageName = "Add Products"

    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user)=> {
        if(user) {
            setIsUser(true)
        } else {
            setIsUser(false)
            //send user to login page
            navigator("/")
        }
    })
if(isUser) { 

    return (
        <>  
        <AppBar></AppBar>
        <AddProductPanel title={pageName}/>
        <PannelBody>
            
        </PannelBody>
        </>
    );
}else {
    return null
};
}

export default AddNewProductsPage