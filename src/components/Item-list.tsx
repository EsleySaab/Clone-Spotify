import { artistArray } from "../assets/database/artists"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"

const ItemList = () => {
  const artists = artistArray
  return (
    <>
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas Populares</h2>
          <a className="item-list__link" href="#">
            Mostrar tudo
          </a>
        </div>

        <div className="item-list__container">
          {artists.slice(0, 7).map((artist) => (
            <div className="single-item">
              <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                  <img
                    className="single-item__image"
                    src={artist.image}
                    alt=""
                  />
                </div>

                <FontAwesomeIcon
                  className="single-item__icon"
                  icon={faCirclePlay}
                />
              </div>
              <div className="single-item__texts">
                <div className="single-item__2lines">
                  <p className="single-item__title">{artist.name}</p>
                  <p className="single-item__type">Artista</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ItemList
