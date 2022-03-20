import React, {useState} from 'react'

import { signOut } from 'firebase/auth'
import {auth} from 'libs/firebase'
import {IoMenu, IoCloseOutline,IoMail,IoNotifications,IoPerson} from 'react-icons/io5'
import {AppBarStyles} from './styles'
import {Link} from "react-router-dom"
import {SidebarData} from './SidebarData'



  function AppBar (props) {

    const [sidebar,setSidebar] = useState(true)
    const showSidebar = () => setSidebar(!sidebar)

    function onLogoutRequest(e) {
      signOut(auth)
      //sets user to sign out which means it will send the user to the login page
    }

  return (
        <AppBarStyles>
            <nav className='nav-bar'>
              <Link to='#' className='hamburger-menu'>
                <IoMenu onClick={showSidebar}/>
              </Link>

              <Link to={"/dashboard"}><img src='logo.png' alt='logo'></img></Link>

              <ul>
                  <li onClick={onLogoutRequest}>Sign Out</li> 
                  <li><IoMail/></li>
                  <li><IoNotifications/></li>
                  <li><IoPerson/></li>
              </ul>
            </nav>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to="#" className='menu-bars'>
                    <IoCloseOutline/>
                  </Link>
                </li>
                {SidebarData.map((item,index)=> {
                  return (
                    <li key={index} className={item.classname}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
        </AppBarStyles>
  )
}

export default AppBar