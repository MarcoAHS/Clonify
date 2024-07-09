import { CardPlayButton } from "./CardPlayButton.jsx"
export function PlayListItemCard({ playlist }){
    const { id, cover, title, artists, color } = playlist
    const artistString = artists.join(', ')
    return (
        <section className="group relative py-4">
            <div
            className="absolute right-4 bottom-20 translate-y-4
            transition-all duration-500 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            z-10"
            >
                <CardPlayButton id={id} client:visible />
            </div>
            <a style={{backgroundColor: `${color.dark}`}} className="playlist-item transition-all duration-500 shadow-lg flex p-2 overflow-hidden gap-5 px-3 rounded-md group-hover:scale-105 hover:shadow-2xl hover:bg-zinc-500/10 w-40 flex-col" 
                href={`/playlist/${id}`}>
            <picture className="aspect-square w-full h-auto">
                <img style={{viewTransitionName: `playlist ${id} image`}} className="w-full h-auto rounded-md" 
                src={cover} 
                alt={`Cover of ${title} by ${artistString}`}/>
            </picture>

            <div className="flex flex-col flex-auto truncate">
                <h4 className="font-bold h-6 w-auto text-sm">{title} </h4>
                <span className="h-6 w-auto text-xs text-gray-300">{artistString}</span>
            </div> 
        </a>
        </section>
    )
}