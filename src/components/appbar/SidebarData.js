import React from 'react';
import {IoHome,IoPerson,IoCash,IoStar,IoBag} from 'react-icons/io5'


 
export const SidebarData = 
[
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <IoHome/>,
        classname: 'nav-text'
    },
    {
        title: 'Users',
        path: '/Users',
        icon: <IoPerson/>,
        classname: 'nav-text'
    },
    {
        title: 'Orders',
        path: '/Orders',
        icon: <IoBag/>,
        classname: 'nav-text'
    },
    {
        title: 'Products',
        path: '/Products',
        icon: <IoCash/>,
        classname: 'nav-text'
    },
    {
        title: 'Reviews',
        path: '/Reviews',
        icon: <IoStar/>,
        classname: 'nav-text'
    }, 

]