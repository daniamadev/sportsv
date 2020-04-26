import { createStore } from "redux"

const initialState = {
  usuariosdoreducer: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      console.log(action.payload)
      return {
        usuariosdoreducer: action.payload,
      }
    case "NEW_ROW":
      return {
        usuariosdoreducer: [...state.usuariosdoreducer, action.payload],
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
