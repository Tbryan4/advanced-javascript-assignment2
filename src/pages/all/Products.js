import React, {useState} from 'react'

import {onAuthStateChanged} from 'firebase/auth'
import { auth } from 'libs/firebase';
import { useNavigate } from 'react-router-dom';


import { AppBar } from '../../components/appbar';
import {Panel} from 'components/Panel'




// rfc for shortcut


function ProductsPage(props) {

    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();
    const pageName = "View All Products"
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
        <Panel title={pageName}>
            
        </Panel>

        </>
    );
}

else {
    return null
};
}

export default ProductsPage