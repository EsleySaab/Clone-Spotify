import { artistArray } from "../assets/database/artists"
import { songsArray } from "../assets/database/songs"
import { ItemList } from "./Item-list"

export const Main = () => {
  return (
    <div className="main">
      <ItemList
        title="Artistas populares"
        items={5}
        itemsArray={artistArray}
        path="/artists"
      />
      <ItemList
        title="Músicas populares"
        items={10}
        itemsArray={songsArray}
        path="/songs"
      />
    </div>
  )
}
