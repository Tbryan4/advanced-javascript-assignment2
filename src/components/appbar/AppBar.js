import React from 'react'
import {IoEllipsisVertical,IoPersonCircleOutline, IoMailOpenOutline, IoNotificationsOutline,IoMenu} from 'react-icons/io5'
import {AppBarStyles,AppBarItems,AppBarItemGroup,AppBarItem} from './styles'
import {IconButton} from '../../ui/buttons'
import {Link} from "react-router-dom"


  function AppBar (props) {
  return (
        <AppBarStyles>
            <IoMenu></IoMenu>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}></nav>
        </AppBarStyles>
  )
}

export default AppBar