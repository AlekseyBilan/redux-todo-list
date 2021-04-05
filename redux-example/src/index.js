import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import logger from 'redux-logger'
import './index.css'

//const store = createStore(rootReducer) //create without logger

// Logger with default options
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

//window.store = store; //only for dev mode - add store for "window" - it can be tested from console 

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)