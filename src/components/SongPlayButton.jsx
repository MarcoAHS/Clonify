import { usePlayerStore } from '../store/playStore'
import { songs, playlists } from "../lib/data"
import { useState } from 'react'

export function SongPlayButton({ song: songParam }){
    const {
        currentMusic,
        setIsPlaying,
        setCurrentMusic
    } = usePlayerStore(state => state)
    const [ anchor, setAnchor ] = useState("")
    const cancion = songs.filter(song => song.id === songParam.id  && song.albumId === songParam.albumId)
    const handleClick = () => {
        if(currentMusic.song == null){
            setCurrentMusic({songs: [cancion[0]], song: cancion[0]})
            setIsPlaying(true)
        } else{
            if(currentMusic.songs.filter(i => i.id === songParam.id && i.albumId === songParam.albumId).length > 0) {
                //repetida
                return
            }
            setCurrentMusic({songs: [...currentMusic.songs, cancion[0]], song: currentMusic.song})
        }
        setAnchor("bg-green-600/70")
        setTimeout(() => {
            setAnchor("")
        }, 200)
    }
    return (
        <>
        <button onClick={handleClick} className={`${anchor} card-play-button rounded-full bg-transparent px-4 py-3 hover:scale-105 transition-all duration-[100ms]`}>
            +
        </button>
        </>
    )
}