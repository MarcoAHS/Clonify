import { usePlayerStore } from '../store/playStore'
import { songs, playlists } from "../lib/data"

export function SongPlayButton({ song: songParam }){
    const {
        currentMusic,
        isPlaying,
        setIsPlaying,
        setCurrentMusic
    } = usePlayerStore(state => state)
    const cancion = songs.filter(song => song.id === songParam.id  && song.albumId === songParam.albumId)
    const handleClick = () => {
        if(currentMusic.song == null){
            setCurrentMusic({songs: [cancion[0]], song: cancion[0]})
            setIsPlaying(true)
        } else{
            setCurrentMusic({songs: [...currentMusic.songs, cancion[0]], song: currentMusic.song})
        }
    }
    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-transparent p-4 hover:scale-105 transition hover:bg-black/40">
            +
        </button>
    )
}