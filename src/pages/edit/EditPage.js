import React, {useState} from 'react'

import {onAuthStateChanged} from 'firebase/auth'
import { auth } from 'libs/firebase';
import { useNavigate } from 'react-router-dom';

import { AppBar } from '../../components/appbar';
import { AddProductPanel } from 'components/Panel/AddProductPanel';



// rfc for shortcut

function EditPage(props) {

    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();
    const pageName = "Edit Products"

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
                <AppBar>
                </AppBar>   
                <AddProductPanel title={pageName}/>   
            </>
      
    )
}else {
        return null
    };
}

export default EditPage