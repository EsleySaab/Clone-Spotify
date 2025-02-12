import { SingleItem } from "./Single-item"

export const ItemList = ({ title, items, itemsArray, path }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <a href={path} className="item-list__link">
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {itemsArray.slice(0, items).map((currObj) => (
          <SingleItem {...currObj} key={currObj.id} />
        ))}
      </div>
    </div>
  )
}
