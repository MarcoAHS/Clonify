import { usePlayerStore } from '../store/playStore'
import { songs, playlists } from "../lib/data"
import { Pause, Play } from "./Player"
export function SongPlayer({ song }) {
    const {
        currentMusic,
        isPlaying,
        setIsPlaying,
        setCurrentMusic
      } = usePlayerStore(state => state)
    const isPlayingSong = isPlaying && currentMusic?.playlist.id === song.albumId && currentMusic.song.id === song.id
    const thisplaylistsongs = songs.filter(cancion => cancion.albumId === song.albumId)
    const color = playlists.filter(playlist => playlist.albumId === song.albumId)[0].color.dark
    const handleClick = () => {
        if(isPlayingSong){
            setIsPlaying(false)
            return
        }
        if(currentMusic.song === null){
            setCurrentMusic({songs: thisplaylistsongs, playlist: { id: song.albumId }, song: thisplaylistsongs[song.id - 1]})
            setIsPlaying(true)
            return
        }
        if(currentMusic.song.id === song.id && currentMusic.playlist.id === song.albumId){
            setIsPlaying(true)
            return
        }
    }
    return (
        <button style={{backgroundColor: color}} 
        className={`rounded-full p-3 shadow-lg ${isPlayingSong ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
        onClick={handleClick}>{isPlayingSong ? <Pause/> : <Play/>}</button>
    )
}