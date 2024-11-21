import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import './navbar.css' 

export default function Navbar() {
  return (
    <div className='navBarBox'>
        <div className="navBarLeft">
          <span className="logo">fakebook</span>

        </div>
        <div className="navBarCenter">
            <div className="searchbarBox">
             <SearchIcon className='searchIcon'/>
             <input placeholder='Search for your friend  ' className="searchInput" />
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
              <span className="navBarLink">Homepage</span>
              <span className="navBarLink">Profile</span>
              </div>

            <div className="navBarIcons">
                <div className="navBarIcon">
                  <PersonIcon/>
                  <span className='TagIcon'>3</span>
                </div>

                <div className="navBarIcon">
                 <MessageIcon/>
                 <span className='TagIcon'>5</span>
                </div>

                <div className="navBarIcon">
                   <SettingsIcon/>
                   <span className='TagIcon'>2</span>
                </div>
                
            </div>  
            <div className="pic">
                <img src="/images/1.jfif" alt="" className="profilePic1" />
            </div>
        </div>
      
    </div>
  )
}
