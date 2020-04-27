import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import Externo from "../ApiExterna"
import Ride from "../ApiInterna/Ride"
import Day from "../ApiInterna/Day"
import "./style.scss"

class Usuarios extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      filteredUsers: [],
      searchTerm: "",
    }
  }

  filterUsers() {
    const filteredUsers = this.state.users.filter((user) => {
      const userLowerCase = user.name.toLowerCase()
      const searchTermLowerCase = this.state.searchTerm.toLowerCase()

      return userLowerCase.includes(searchTermLowerCase)
    })

    this.setState({ filteredUsers })
  }

  handleTyping(e) {
    this.setState({ searchTerm: e.target.value }, () => this.filterUsers())
  }

  getRandom = () => {
    return Math.floor(Math.random() * 10 + 1)
  }

  handleDelete = (userId) => {
    this.props.dispatch({
      type: "DELETE_USER",
      payload: userId,
    })
  }

  render() {
    return (
      <>
        {this.props.userquerecebedoreducer.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.username}</td>
            <td>{usuario.name}</td>
            <td className="table__email">{usuario.email}</td>
            <td className="table__city">{usuario.address.city}</td>
            <Ride idUsuario={this.getRandom()} tipo="ride" />
            <Day idUsuario={this.getRandom()} tipo="day" />
            <Externo
              className="table__posts"
              idUsuario={this.getRandom()}
              tipo="posts"
            />
            <Externo idUsuario={this.getRandom()} tipo="albums" />
            <Externo idUsuario={this.getRandom()} tipo="photos" />
            <td className="button-delete">
              <button onClick={() => this.handleDelete(usuario.id)}>Del</button>
            </td>
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
