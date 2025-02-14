import { artistArray } from "../assets/database/artists"
import { songsArray } from "../assets/database/songs"
import { ItemList } from "./Item-list"

export const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas populares"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas populares"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  )
}
