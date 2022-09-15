import './index.css'

const CountryItem = props => {
  const {item, changeVisit} = props
  const {id, name, isVisited} = item
  const changeVisited = () => {
    changeVisit(id)
  }

  return (
    <li className="list-visited">
      <div className="visit-card">
        <p className="name">{name}</p>
        {isVisited && <p className="visited">Visited</p>}
        {!isVisited && (
          <button className="btn" onClick={changeVisited} type="button">
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default CountryItem
