import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import Externo from "../ApiExterna"
import Ride from "../ApiInterna/Ride"
import Day from "../ApiInterna/Day"

class Usuarios extends Component {
  getUsuario = async () => {
    await axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((result) => {
        this.props.dispatch({
          type: "GET_USER",
          payload: result.data,
        })
      })
  }

  componentDidMount = () => {
    this.getUsuario()
  }

  render() {
    return (
      <>
        {this.props.userquerecebedoreducer.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.username}</td>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.address.city}</td>
            <Ride idUsuario={usuario.id} tipo="ride" />
            <Day idUsuario={usuario.id} tipo="day" />
            <Externo idUsuario={usuario.id} tipo="posts" />
            <Externo idUsuario={usuario.id} tipo="albums" />
            <Externo idUsuario={usuario.id} tipo="photos" />
          </tr>
        ))}
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    userquerecebedoreducer: state.usuariosdoreducer,
  }
}

export default connect(mapStateToProps)(Usuarios)
