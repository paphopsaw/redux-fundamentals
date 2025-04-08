import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'

const delayedMessageMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Add a new todo: ', action.payload)
    }, 1000)
  }
}

const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware)

const store = createStore(rootReducer, middlewareEnhancer)

export default store
