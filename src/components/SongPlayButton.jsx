import { usePlayerStore } from '../store/playStore'
import { songs, playlists } from "../lib/data"
import { useState } from 'react'

export function SongPlayButton({ song: songParam }){
    const {
        currentMusic,
        setIsPlaying,
        setCurrentMusic
    } = usePlayerStore(state => state)
    const color = playlists.filter(playlist => playlist.albumId === songParam.albumId)[0].color.dark
    const [ anchor, setAnchor ] = useState("transparent")
    const cancion = songs.filter(song => song.id === songParam.id  && song.albumId === songParam.albumId)
    const handleClick = () => {
        if(currentMusic.song == null){
            setCurrentMusic({songs: [cancion[0]], song: cancion[0]})
            setIsPlaying(true)
            setAnchor(color)
        } else{
            if(currentMusic.songs.filter(i => i.id === songParam.id && i.albumId === songParam.albumId).length > 0) {
                //repetida
                setAnchor("red")
            }else{
                setCurrentMusic({songs: [...currentMusic.songs, cancion[0]], song: currentMusic.song})
                setAnchor(color)
            }
        }
        setTimeout(() => {
            setAnchor("")
        }, 500)

    }
    return (
        <>
        <button onClick={handleClick} style={{backgroundColor: anchor}} className="card-play-button rounded-full px-4 py-3 transition-all duration-[300ms]">
            +
        </button>
        </>
    )
}