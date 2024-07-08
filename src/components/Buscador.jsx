import { useState } from "react"
import { PlayListItemCard } from "../components/PlaylistItemCard.jsx"

export function Buscador({ playlists }){
    const [ items, setItems ] = useState(playlists)
    const handleUpdate = (e) => {
        var matcher = e.target.value;
        setItems([...playlists].filter(item => item.title.includes(matcher)))
    }
    return(
        <>
        <div className="relative z-10 pb-6">
            <h2 className="text-2xl mb-4 font-bold">Search</h2>
            <label className="">Search: </label>
            <input name="query" className="text-black" type="text" placeholder="Eminem" onChange={handleUpdate}/>
        </div>
        <div className="relative z-10 px-6 flex gap-4 flex-wrap justify-center lg:justify-start">
            {items.map(item => <PlayListItemCard client:load playlist={item} />)}
        </div>
        </>
    )
}