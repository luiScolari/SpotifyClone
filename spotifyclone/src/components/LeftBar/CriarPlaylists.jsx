import React from 'react';

import './CriarPlaylists.css'

const CriarPlaylists = () => {
    const icons = {
        plusIcon: <svg role="img" height="12" width="12" aria-hidden="true"
            viewBox="0 0 16 16" id='plusIcon'><path
                d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path><path fill="none" d="M0 0h16v16H0z"></path></svg>,
        heartIcon: <svg role="img" height="12" width="12" aria-hidden="true"
            viewBox="0 0 16 16" id='heartIcon'><path fill='none'
                d="M0 0h16v16H0z"></path><path fill='currentColor' d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path></svg>
    }
    return (
        <div className='criarPlaylistsContainer'>
            <button className='criarPlaylist'>
                <div className='playlistIcon'>{icons.plusIcon}</div> <span>Criar Playlist</span>
            </button>
            <button className="criarPlaylist">
                <div id='heartIconDiv' className='playlistIcon'>{icons.heartIcon}</div> <span>Músicas Curtidas</span>
            </button>
            <hr />
        </div>
    );
}

export default CriarPlaylists;