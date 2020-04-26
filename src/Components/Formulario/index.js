import React, { Component } from "react"
import { connect } from "react-redux"

class Formulario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      email: "",
      address: "",
      ride: "",
      day: "",
      posts: "",
      albums: "",
      photos: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({
      type: "NEW_ROW",
      payload: this.state,
    })
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  render() {
    const { username, name, email } = this.state
    return (
      <section className="container">
        <hr />

        <form onSubmit={this.handleSubmit}>
          <section>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleUsername}
            />

            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleName}
            />

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleEmail}
            />

            <button type="submit">Save</button>
            <button type="reset">Discard</button>
          </section>

          <section>
            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label>Ride in group?</label>

            <input id="always" type="radio" name="ride" value="Always" />
            <label htmlFor="always">Always</label>

            <input id="sometimes" type="radio" name="ride" value="Sometimes" />
            <label htmlFor="sometimes">Sometimes</label>

            <input id="never" type="radio" name="ride" value="Never" />
            <label htmlFor="never">Never</label>

            <label>Days of the week</label>

            <input id="sun" type="checkbox" name="day" value="Sun" />
            <label htmlFor="sun">Sun</label>

            <input id="mon" type="checkbox" value="Mon" />
            <label htmlFor="mon">Mon</label>

            <input id="tue" type="checkbox" value="Tue" />
            <label htmlFor="tue">Tue</label>

            <input id="wed" type="checkbox" value="Wed" />
            <label htmlFor="wed">Wed</label>

            <input id="thu" type="checkbox" value="Thu" />
            <label htmlFor="thu">Thu</label>

            <input id="fri" type="checkbox" value="Fri" />
            <label htmlFor="fri">Fri</label>

            <input id="sat" type="checkbox" value="Sat" />
            <label htmlFor="sat">Sat</label>
          </section>
        </form>
      </section>
    )
  }
}

export default connect()(Formulario)
