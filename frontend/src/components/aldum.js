import React from 'react'

function Albums(){
    const songs = [
        {
            id: 1,
            songname: 'passanger',
            artist: 'passanger'
        },
        {
            id: 2,
            songname: 'passanger',
            artist: 'passanger'
        }
    ]

    const album = songs.map(song => {song.songname})
    return(
    <div>
    {album}
    </div>
    )
}

export default Albums