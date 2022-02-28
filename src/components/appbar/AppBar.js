import React from 'react'
import {IoEllipsisVertical,IoPersonCircleOutline, IoMailOpenOutline, IoNotificationsOutline} from 'react-icons/io5'
import {AppBarStyles,AppBarItems,AppBarItemGroup,AppBarItem} from './styles'
import {IconButton} from '../ui/buttons'

  function AppBar (props) {
  return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>Shoelocker</AppBarItem>
                <AppBarItemGroup>
                  <IconButton>
                    <p>Sign Out</p>
                  </IconButton>
                  <IconButton>
                    <IoMailOpenOutline size="1.7rem"/>
                  </IconButton>
                  <IconButton>
                    <IoNotificationsOutline size="1.5rem"/>
                  </IconButton>
                  <IconButton>
                    <IoPersonCircleOutline size="1.7rem"/>
                  </IconButton>
                  <IconButton>
                    <IoEllipsisVertical size="1.25rem" color='#999'/>
                  </IconButton>
                </AppBarItemGroup>
            </AppBarItems>
        </AppBarStyles>
  )
}

export default AppBar