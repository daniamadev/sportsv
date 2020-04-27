import { createStore } from "redux"

const initialState = {
  usuariosdoreducer: [],
  search: "",
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        usuariosdoreducer: action.payload,
      }

    case "NEW_ROW":
      return {
        usuariosdoreducer: [...state.usuariosdoreducer, action.payload],
      }

    case "DELETE_USER":
      const usuarioDeletado = state.usuariosdoreducer.filter(
        (usuario) => usuario.id !== action.payload
      )
      return {
        usuariosdoreducer: usuarioDeletado,
      }

    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
