import React from 'react';

import './NavBar.css'

const NavBar = () => {
    const icons = {
        homeIcon: <svg role="img" height="24" width="24" className="NavBarSvgicons" 
        viewBox="0 0 24 24"><path fill='currentColor' 
        d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z"></path></svg>,
        searchIcon: <svg role="img" height="24" width="24" className="NavBarSvgicons" 
        viewBox="0 0 24 24"><path fill='currentColor' 
        d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"></path></svg>,
        suabibliotecaIcon: <svg role="img" height="24" width="24" className="NavBarSvgicons" 
        viewBox="0 0 24 24"><path fill='currentColor' 
        d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"></path></svg>
    }

    return ( 
        <ul className='NavBarcontainer'>
            <li> {icons.homeIcon} Início</li>
            <li> {icons.searchIcon} Buscar</li>
            <li> {icons.suabibliotecaIcon}Sua Biblioteca</li>
        </ul>
     );
}
 
export default NavBar;