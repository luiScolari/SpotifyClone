import React from 'react'
import './LeftBar.css'

import Logo from './Logo'
import NavBar from './NavBar'
import CriarPlaylists from './CriarPlaylists'
import MyPlaylists from './Playlists'

const LeftBar = () => {
    return ( 
        <div className="LeftbarContainer">
            <Logo/>
            <NavBar/>
            <CriarPlaylists/>
            <MyPlaylists/>
        </div>
     );
}
 
export default LeftBar;