import React from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from  'react-redux'
import App from './App'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './Redux/rootReducer'
import reduxThunk from 'redux-thunk'
import './index.css'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    
const loggerMiddleWare = store => next => action =>{
  const result = next(action)
  console.log('MiddleWare', store.getState())
  return result
}
const root = createRoot(document.getElementById("root"))
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  loggerMiddleWare,
  reduxThunk
  )))
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
root.render(app)
