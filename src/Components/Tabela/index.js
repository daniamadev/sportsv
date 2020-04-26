import React from "react"
import Usuarios from "../Usuarios"

const Tabela = () => {
  return (
    <table className="tabela">
      <thead>
        <tr>
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
      <tbody>
        <Usuarios />
      </tbody>
    </table>
  )
}

export default Tabela
