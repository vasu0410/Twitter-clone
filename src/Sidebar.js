import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
// import TagIcon from '@mui/icons-material/Tag';
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
    return (
    <div className='sidebar'>
    
    {/* Twitter icon */}
    
    <TwitterIcon className='sidebar-twitterIcon' />
    
    {/* SidebarOption */}
    
    <SidebarOption active text="Home" Icon={HomeIcon}/>
    <SidebarOption text="Explore" Icon={SearchIcon}/>
    <SidebarOption text="Notification" Icon={NotificationsNoneIcon} />
    <SidebarOption text="Messages" Icon={MailOutlineIcon} />
    <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
    <SidebarOption text="Lists" Icon={ListAltIcon} />
    <SidebarOption text="Profile" Icon={PermIdentityIcon} />
    <SidebarOption text="More" Icon={MoreHorizIcon} />

   
    {/* Button -> tweet */}
    <Button variant="outlined" className='sidebar--tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar