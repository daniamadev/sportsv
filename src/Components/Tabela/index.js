import React, { Component } from "react"
import axios from "axios"
import Usuarios from "../Usuarios"
import { connect } from "react-redux"
/* import Search from "../Search" */
import "./style.scss"

class Tabela extends Component {
  state = {
    usuariosFiltrados: [],
    termoPesquisado: "",
  }

  handleSearch = (e) => {
    this.setState({
      termoPesquisado: e.target.value,
    })
  }

  getUsuario = () => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((result) => {
      this.props.dispatch({
        type: "GET_USER",
        payload: result.data,
      })
    })
  }

  componentDidMount = () => {
    this.getUsuario()
  }

  buscaUsuarios = () => {
    //
  }

  render() {
    return (
      <>
        <h1 className="table__title">Users</h1>
        <input onKeyUp={this.handleSearch.bind(this)} />
        <table className="table">
          <thead className="table__header">
            <tr className="table__row">
              <th>Username</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>City</th>
              <th>Ride in group</th>
              <th>Day of the week</th>
              <th>Posts</th>
              <th>Albums</th>
              <th>Photos</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <Usuarios />
          </tbody>
        </table>
      </>
    )
  }
}
function mapStateToProps(state) {
  return {
    userquerecebedoreducer: state.usuariosdoreducer,
  }
}

export default connect(mapStateToProps)(Tabela)
