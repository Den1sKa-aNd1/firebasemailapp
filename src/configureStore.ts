import { createStore, applyMiddleware, MiddlewareAPI } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'

export default function configureStore(preloadedState: any) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
        thunk,
        logger
    )
  )
}