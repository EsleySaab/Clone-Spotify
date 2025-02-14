import { SingleItem } from "./Single-item"
import { Link, useLocation } from "react-router-dom"

export const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation()

  const isHome = pathname === "/"
  const finalItems = isHome ? items : Infinity

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray.slice(0, finalItems).map((currObj) => (
          <SingleItem {...currObj} key={currObj._id} idPath={idPath} />
        ))}
      </div>
    </div>
  )
}
