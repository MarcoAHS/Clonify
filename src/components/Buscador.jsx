import { useState } from "react"
import { PlayListItemCard } from "../components/PlaylistItemCard.jsx"
import { playlists } from '../lib/data';
export function Buscador(){
    const [ album, setAlbum ] = useState(playlists)
    const [ artists, setArtists ] = useState(playlists)
    const handleUpdate = (e) => {
        var matcher = e.target.value.toUpperCase();
        setAlbum([...playlists].filter(item => item.title.toUpperCase().includes(matcher)))
        setArtists(playlists.filter(item => item.artists.filter(i => (i.toUpperCase().includes(matcher))).length > 0 ? true : false))
    }
    return(
        <>
        <div className="relative z-10 pb-6">
        <h2 className="text-2xl font-semibold">Find Your Next Favorite Music</h2>
        <div class="relative mb-6 mt-5 ml-5">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            ><path
                d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
            ></path></svg>
        </div>
        <input type="text" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[300px] ps-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Looking for a Album?" onChange={handleUpdate}/>
        </div>
        </div>
        {album.length > 0 && 
        <>
            <h2 className="relative z-10 ml-5 mb-4 text-2xl font-semibold">Albums/Playlist</h2>
            <div style={{scrollbarWidth: "thin"}} className="relative z-10 px-6 flex gap-4 justify-center lg:justify-start max-w-[80dvw] overflow-auto">
                {album.map(item => <PlayListItemCard client:load playlist={item} />)}
            </div>
        </>
        }
        {artists.length > 0 && 
        <>
            <h2 className="relative z-10 ml-5 mb-4 text-2xl font-semibold">Artistas</h2>
            <div style={{scrollbarWidth: "thin"}} className="relative z-10 px-6 flex gap-4 justify-center lg:justify-start max-w-[80dvw] overflow-auto">
                {artists.map(item => <PlayListItemCard client:load playlist={item} />)}
            </div>
        </>
        }
        </>
    )
}