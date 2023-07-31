import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: []}

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getDate = event => {
    this.setState({
      date: format(new Date(event.target.value), 'dd MMMM yyyy, EEEE'),
    })
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isActive: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  isToggeled = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppoint => {
        if (id === eachAppoint.id) {
          return {...eachAppoint, isActive: !eachAppoint.isActive}
        }
        return eachAppoint
      }),
    }))
  }

  render() {
    const {title, appointmentsList} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="main-container">
            <div className="card-container">
              <h1 className="heading">Add Appointment</h1>
              <form className="form" onSubmit={this.addAppointment}>
                <label htmlFor="title">TITLE</label> <br />
                <input
                  id="title"
                  type="text"
                  className="title"
                  placeholder="Title"
                  onChange={this.getTitle}
                />{' '}
                <br />
                <label htmlFor="date">DATE</label> <br />
                <input
                  type="date"
                  id="date"
                  className="date"
                  onChange={this.getDate}
                />
                <button className="btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="image"
                alt="appointments"
              />
            </div>
          </div>
          <div className="bottom-container">
            <hr className="line" />
            <div className="last-container">
              <h1 className="bottom-head">Appointments</h1>
              <button
                type="button"
                className="starred-btn"
                onClick={this.starred}
              >
                Starred
              </button>
            </div>
            <ul className="lists-container">
              {appointmentsList.map(eachItem => (
                <AppointmentItem
                  eachItem={eachItem}
                  key={eachItem.id}
                  isToggeled={this.isToggeled}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
