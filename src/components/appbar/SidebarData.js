import React from 'react';
import {IoHome,IoPerson,IoCash,IoStar,IoBag,IoAdd,IoCreateOutline} from 'react-icons/io5'


 
export const SidebarData = 
[
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <IoHome/>,
        classname: 'nav-text'
    },
    {
        title: 'View All Products',
        path: '/all',
        icon: <IoCash/>,
        classname: 'nav-text'
    },

    {
        title: 'Add Products',
        path: '/add',
        icon: <IoAdd/>,
        classname: 'nav-text'
    },

    {
        title: 'Edit Products',
        path: '/edit',
        icon: <IoCreateOutline/>,
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
        title: 'Reviews',
        path: '/Reviews',
        icon: <IoStar/>,
        classname: 'nav-text'
    }, 

]