import React, { Component } from "react"
import axios from "axios"

class Day extends Component {
  state = {
    itens: [],
  }

  getApiInterna = async () => {
    await axios
      .get(`http://localhost:3000/day/${this.props.idUsuario}`)
      .then((result) => {
        this.setState({ itens: result.data })
      })
  }

  componentDidMount = () => {
    this.getApiInterna()
  }

  render() {
    return (
      <>
        <td>{this.state.itens.day}</td>
      </>
    )
  }
}

export default Day
