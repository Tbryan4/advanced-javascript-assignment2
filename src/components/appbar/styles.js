// imsc shortcut

import styled from 'styled-components';

//exsc
const AppBarStyles = styled.div `
    width: 100%;
    

    .nav-bar {
        background-color: crimson;
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul{
            display: flex ; 
            justify-content: space-between ;
            width: 13rem ;
            color:white;
            list-style:none ;
            margin-right: 1rem ;
        }
        
        li {
            cursor:pointer;
        }

        a {
            color: white ;
            text-decoration: none ;
        }

        img {
            width: 3rem ;
        }
    }

    .hamburger-menu {
        margin-left:2rem;
        font-size:2rem;
        color:white;
    }

    .nav-menu {
        background-color: crimson;
        width:12rem;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: -100%;
        transition: 1s;
        box-shadow: 0px 0px 6px black;
    }

    .nav-text {
        display: flex;
        justify-content: start;
        align-items: center;
        padding-left: 0.3rem;
        list-style: none;
        height: 60px;
    }

    .nav-menu.active {
        left: 0;
        transition: 1s;
    }

    .navbar-toggle {
        text-align: center;
        list-style: none;
        font-size: 2rem;  
        padding-top:1.3rem ;
    }

    .nav-text a {
        text-decoration: none;
        color: white;
        font-size:1rem;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        border-radius:4px;
    }

    .nav-text a:hover {
        background-color: red;
        width: 100%;
        padding-left: 0.5rem;
        transition: 0.5s;
    }

    .nav-items {
        width: 100%;
        padding-top: 0rem;
    }

    .navbar-toggle {
        background-color: crimson;
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .menu-bars {
        color: white;
    }

    span {
        margin-left: 16px;
    }
`;

const AppBarItems = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItemGroup = styled.li `
    list-style-type: none;
`;

const AppBarItem = styled.li `
    list-style-type: none;
    font-weight: bold;
    text-shadow: 0px 0px 2px grey;
`;


export {AppBarItems,AppBarItemGroup,AppBarItem,AppBarStyles}

