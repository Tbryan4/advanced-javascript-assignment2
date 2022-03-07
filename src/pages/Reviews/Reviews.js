import React from 'react'
import { AppBar } from '../../components/appbar';
import {auth} from "./../../libs/firebase"



// rfc for shortcut


function ReviewPage(props) {
    console.log(auth)
    return (
        <>  
        <AppBar></AppBar>
        <h1 className='main-page-header'>Reviews</h1>
        </>
    );
}

export default ReviewPage