import React from 'react'
import './Playlist.css'

const Playlist = ({ playlists, handleTooLongNames }) => {


    return <>
        {playlists.map((value) => (
            <div className='playlist'>
                <a handletoolongnames={handleTooLongNames()} target='_blank' href={value.src}>
                    {value.name}
                </a>
            </div>
        ))}
    </>
}

export default Playlist;