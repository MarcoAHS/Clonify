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
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === parseInt(id)
  const handleClick = () => {
    if(isPlayingPlaylist){
        setIsPlaying(false)
        return
    }
    // setCurrentMusic({songs: thisplaylistsongs, playlist: { id: song.albumId }, song: thisplaylistsongs[song.id - 1]})
    setCurrentMusic({songs: playListSongs, playlist: { id: thisPlaylist }, song: playListSongs[0]})
    setIsPlaying(true)
  }

  return (
    <button style={{backgroundColor: color}} onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
      {isPlayingPlaylist ? <Pause/> : <Play/>}
    </button>
  )
}