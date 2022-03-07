import React, {useState} from 'react'
import {IoMenu, IoCloseOutline} from 'react-icons/io5'
import {AppBarStyles,AppBarItems,AppBarItemGroup,AppBarItem} from './styles'
import {IconButton} from '../../ui/buttons'
import {Link} from "react-router-dom"
import {SidebarData} from './SidebarData'


  function AppBar (props) {

    const [sidebar,setSidebar] = useState(true)
    const showSidebar = () => setSidebar(!sidebar)

  return (
        <AppBarStyles>
            <div className='nav-bar'>
              <Link to='#' className='hamburger-menu'>
                <IoMenu onClick={showSidebar}/>
                
              </Link>
            </div>
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