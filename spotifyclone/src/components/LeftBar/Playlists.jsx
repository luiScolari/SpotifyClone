import './Playlists.css'
import React from 'react'
import { useEffect, useState } from 'react'
import Playlist from './Playlist'
const axios = require('axios')

const Playlists = () => {
    const [playlists, setPlaylists] = useState([])

    const handleTooLongNames = () => {
        for (let i = 0; i < 2; i++) {
            if (playlists[i].name.length > 30) {
                const tooLongString = playlists[i].name.slice(0, 30)
                playlists[i].name = tooLongString
                const updatedPlaylists = [
                    ...playlists
                ]
                setPlaylists(updatedPlaylists)
            }
        }

    }
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/api')
            setPlaylists(data)
        }
        fetchData()
    })



    return (
        <div className='playlistsContainer'>
            <Playlist handleTooLongNames={handleTooLongNames} playlists={playlists} />
        </div>
    );
}

export default Playlists;