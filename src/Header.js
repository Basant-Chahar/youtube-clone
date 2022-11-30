import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar'
function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
        <MenuIcon />
      <img className='header__logo'
      src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
      alt='youtube'></img>
        </div>
      <div className='header__input' >
      <input placeholder='Search' type="text"></input>
      <SearchIcon className='header__inputbutton' />
      </div>
      <div className='header__icons'>
      <VideoCallIcon className='header__icon' />
      <AppsIcon className='header__icon' />
      <NotificationsIcon className='header__icon' />
      <Avatar 
      src='https://yt3.ggpht.com/3cdmeTfIR5vRbGtm857Hilasf9tKnxy8vZyzwymEZnDGq-IpRmPxoLPJQPr01XBrePR9UhB8=s88-c-k-c0x00ffffff-no-rj-mo'
      alt='User'
      />
      </div>
      

    </div>
  )
}

export default Header
