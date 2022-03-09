const mongoose = require('mongoose');
const { Schema } = mongoose

const playlistsSchema = new Schema({
    name: String,
    image: String,
    src: String
})



module.exports = mongoose.model('Playlist', playlistsSchema)