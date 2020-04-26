import React, { Component } from "react"
import axios from "axios"

class Externo extends Component {
  state = {
    itens: [],
  }

  getApiExterna = async () => {
    await axios
      .get(
        `http://jsonplaceholder.typicode.com/users/${this.props.idUsuario}/${this.props.tipo}`
      )
      .then((result) => {
        this.setState({ itens: result.data })
      })
  }

  componentDidMount = () => {
    this.getApiExterna()
  }

  render() {
    return (
      <>
        <td>{this.state.itens.length}</td>
      </>
    )
  }
}

export default Externo
