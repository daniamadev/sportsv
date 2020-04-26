1. Criar a estrutura do projeto

`create react app my-app`

_____

2. Criar uma pasta Redux dentro da pasta src

my-app
|____ Redux

_____

3. Criar um arquivo reducer.js dentro da pasta Redux e iniciar um valor default para o estado

```
import { createStore } from "redux"

const initialState = {
  user: {},
}
```

_____

4. Criar uma função reducer neste arquivo reducer.js

```
function reducer(state = initialState, action) {
  switch (action.type) {
      default:
        return state
   }
}
```

_____

5. Dentro do reducer.js criar a store com a função do pacote redux createStore e exportar

```
const store = createStore(reducer)

export default store
```

_____

6. Importar o provider dentro do App.js

```
import { Provider } from "react-redux"
import store from "./Redux/reducer"

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
```

_____

7. Criar o componente Usuarios e conectar ao Redux

```
import React, { Component } from "react"
import { connect } from "react-redux"

class Usuarios extends Component {
  render() {
    return (
      /* code here */
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.user,
  }
}

export default connect(mapStateToProps)(Usuarios)
```
_____

8. Fazer a requisição a API dos usuarios

`await axios.get("")`

_____

9. Criar o formulário e conectar ao redux

`connect()(Formulario)`

_____

10. Criar uma action para o formulário

```
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        //spread operator faz uma cópia do seu estado atual
        user: action.payload,
      }

      default:
        return state
   }
}
```
