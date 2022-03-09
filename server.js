const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Playlist = require('./schema.js')

mongoose.connect('mongodb://localhost:27017/spotify', {})
    .then(data => {
        console.log('MONGOOSE WORKING');
    }).catch(err => {
        console.log('sheesh MONGOOSE NOT WORKING');
        console.log(err);
    })


app.get('/api', async (req, res) => {
    const findPlaylists = await Playlist.find({})
    res.send(findPlaylists)
})

app.listen(5000, () => {
    console.log('listening to port 5000')
})