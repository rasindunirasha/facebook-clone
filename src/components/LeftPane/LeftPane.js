import React from 'react'
import './leftPane.css' 
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneItem">
             <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>Messages</span>
          </li>

          <li className="leftPaneItem">
             <GroupIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>Groups</span>
          </li>

          <li className="leftPaneItem">
             <RssFeedIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>Feed</span>
          </li>

          <li className="leftPaneItem">
             <FlagIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>Flag</span>
          </li>

          <li className="leftPaneItem">
             <CalendarMonthIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>Events</span>
          </li>
          
          <li className="leftPaneItem">
             <BuildIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>Setting</span>
          </li>

          <li className="leftPaneItem">
             <SportsEsportsIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>Games</span>
          </li>

          <li className="leftPaneItem">
             <NewspaperIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>News</span>
          </li>

          <li className="leftPaneItem">
             <WorkIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>Jobs</span>
          </li>

          <li className="leftPaneItem">
             <LocalGroceryStoreIcon className='leftPaneMenuIcon'/>
             <span className='leftPaneMenuText'>Market</span>
          </li>
          <hr></hr>
          <div className="pagesItem">
            <h3>Pages Liked you</h3>
          </div>
          <li className="pagesLikeItem">
            <img src="/images/1.jfif" alt="" className="likedPic" />
            <span className="pageText">Ashani</span>
          </li>

          <li className="pagesLikeItem">
            <img src="/images/2.jpg" alt="" className="likedPic" />
            <span className="pageText">Rasindu</span>
          </li>

          <li className="pagesLikeItem">
            <img src="/images/3.jpg" alt="" className="likedPic" />
            <span className="pageText">Nirmala</span>
          </li>
         
          <li className="pagesLikeItem">
            <img src="/images/3.jpg" alt="" className="likedPic" />
            <span className="pageText">Hashini</span>
          </li>

          <li className="pagesLikeItem">
            <img src="/images/3.jpg" alt="" className="likedPic" />
            <span className="pageText">Sewwandi</span>
          </li>

        </div>
      </div>

    </div>
  )
}
