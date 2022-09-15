import './index.css'

const CountryCard = props => {
  const {item, deletedItem} = props
  const {id, imageUrl, name} = item

  const deleteItem = () => {
    deletedItem(id)
  }

  return (
    <li className="list-country">
      <div className="img-card">
        <img className="image" alt="thumbnail" src={imageUrl} />
        <div className="img-text">
          <p>{name}</p>
          <button className="remove-btn" onClick={deleteItem} type="button">
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default CountryCard
