import React from "react"
import "./App.scss"
import { Provider } from "react-redux"
import Tabela from "./Components/Tabela"
import Formulario from "./Components/Formulario"
import store from "./Components/Redux/reducer"

function App() {
  return (
    <section className="container">
      <Provider store={store}>
        <Tabela />
        <Formulario />
      </Provider>
    </section>
  )
}

export default App
