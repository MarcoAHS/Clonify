import { Pause, Play } from "./Player"
import { usePlayerStore } from '../store/playStore'
import { songs, playlists } from "../lib/data"

export function CardPlayButton ({ id, size = 'small' }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)
  const playListSongs = songs.filter(song => song.albumId == parseInt(id)) 
  const thisPlaylist = parseInt(playlists.find(playlist => playlist.id === id).id)
  const color = playlists.filter(playlist => playlist.id === id)[0].color.dark
  const isPlayingPlaylist = isPlaying && currentMusic?.song.albumId === parseInt(id)
  const handleClick = () => {
    if(isPlayingPlaylist){
        setIsPlaying(false)
        return
    }
    setCurrentMusic({songs: playListSongs, song: playListSongs[0]})
    setIsPlaying(true)
  }

  return (
    <button style={{backgroundColor: color}} onClick={handleClick} className="card-play-button rounded-full p-4 md:p-6 mt-[-3rem] hover:scale-105 transition">
      {isPlayingPlaylist ? <Pause/> : <Play/>}
    </button>
  )
}