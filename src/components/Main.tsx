import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { songsArray } from "../assets/database/songs"
import ItemList from "./Item-list"

export const Main = () => {
  const songs = songsArray

  return (
    <div className="main">
      <ItemList />

      <div className="item-list">
        <div className="item-list__header">
          <h2>Músicas Populares</h2>
          <a className="item-list__link" href="#">
            Mostrar tudo
          </a>
        </div>

        <div className="item-list__container">
          {songs.map((song) => (
            <div className="single-item">
              <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                  <img className="single-item__image" src={song.image} alt="" />
                </div>

                <FontAwesomeIcon
                  className="single-item__icon"
                  icon={faCirclePlay}
                />
              </div>
              <div className="single-item__texts">
                <div className="single-item__2lines">
                  <p className="single-item__title">{song.name}</p>
                  <p className="single-item__type">Artista</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
