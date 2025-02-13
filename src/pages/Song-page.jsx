import { Link, useParams } from "react-router-dom"
import { Player } from "../components/Player"
import { songsArray } from "../assets/database/songs"
import { artistArray } from "../assets/database/artists"

export const SongPage = () => {
  const { id } = useParams()

  const { image, name, duration, artist, index } = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0]

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0]

  console.log(artistObj)

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artistObj.name}`}
          />
        </Link>
        <Player duration={duration} />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}
