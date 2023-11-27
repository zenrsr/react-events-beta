import './index.css'

const EventItem = props => {
  const {eachItem, updateSelectedEventStatus} = props
  const {imageUrl, name, location, registrationStatus} = eachItem

  const handleOnClick = () => {
    updateSelectedEventStatus(registrationStatus)
  }

  return (
    <li className="list-item">
      <button type="button" className="img-btn" onClick={handleOnClick}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
