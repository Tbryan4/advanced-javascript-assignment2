import React, {useState} from 'react'

import {onAuthStateChanged} from 'firebase/auth'
import { auth } from 'libs/firebase';
import { useNavigate } from 'react-router-dom';

import { AppBar } from '../../components/appbar';
import DashboardPanel from 'components/Panel/DashboardPanel';



// rfc for shortcut

function DashBoardApp(props) {

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
                <AppBar>
                </AppBar>   
                <DashboardPanel/>     
            </>
      
    )
}else {
        return null
    };
}

export default DashBoardApp



