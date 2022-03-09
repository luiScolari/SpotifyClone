const mongoose = require('mongoose');
const Playlist = require('./schema')

mongoose.connect('mongodb://localhost:27017/spotify', {})
    .then(data => {
        console.log('MONGOOSE WORKING');
    }).catch(err => {
        console.log('sheesh MONGOOSE NOT WORKING');
        console.log(err);
    })

const seedPlaylists = async() => {
    await Playlist.deleteMany({})
    const playlist1 = new Playlist({
        name: 'Milith + Luis',
        image: 'Fakeimg',
        src: 'https://open.spotify.com/playlist/5iXPILSZn0MhNlw2QCxGWF'
    });
    const playlist2 = new Playlist({
        name: 'Code-fi / lofi beats 👩‍💻 programming music to chill / code to',
        image: 'AnotherfakeImg',
        src: 'https://open.spotify.com/playlist/4qCl7I8lVPKJua22AWcZqb'
    });
    playlist1.save()
    playlist2.save()
}

seedPlaylists()