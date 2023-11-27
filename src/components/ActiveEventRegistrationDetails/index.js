import './index.css'
import {Component} from 'react'

const registrationStatusConstants = {
  yet: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  no: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderDefaultView = () => (
    <div className="re-container">
      <p className="desc">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  renderNotRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet"
      />
      <p className="desc">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="primary-btn">
        Register Here
      </button>
    </div>
  )

  renderNoRegistrationsView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="nope"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="desc">Stay tuned. We will reopen</p>
    </div>
  )

  render() {
    const {status} = this.props

    switch (status) {
      case registrationStatusConstants.yet:
        return this.renderNotRegisteredView()
      case registrationStatusConstants.registered:
        return this.renderRegisteredView()
      case registrationStatusConstants.no:
        return this.renderNoRegistrationsView()
      default:
        return this.renderDefaultView()
    }
  }
}

export default ActiveEventRegistrationDetails
