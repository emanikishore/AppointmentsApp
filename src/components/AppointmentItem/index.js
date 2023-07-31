import './index.css'

const AppointmentItem = props => {
  const {eachItem, isToggeled} = props
  const {id, title, date, isActive} = eachItem
  const imageUrl = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClicked = () => {
    isToggeled(id)
  }

  return (
    <li className="list-items">
      <div>
        <div className="title-container">
          <p className="title1">{title}</p>
          <button
            data-testid="star"
            className="star"
            type="button"
            onClick={onClicked}
          >
            <img src={imageUrl} alt="star" className="star-image" />{' '}
          </button>
        </div>
        <p className="date1">{date}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
