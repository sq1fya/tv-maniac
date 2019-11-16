import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import { PreferencesContext } from './context/PreferencesContext'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './store/reducers'
import {
  calculatorAdd,
  calculatorClear,
  calculatorRemove,
} from './store/actions/calculator.actions'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))
store.subscribe(() => console.log('Update', store.getState()))

store.dispatch(calculatorAdd(2))
store.dispatch(calculatorAdd(5))
store.dispatch(calculatorClear())

setTimeout(() => store.dispatch(calculatorRemove(4)), 2000)

ReactDOM.render(
  <HashRouter>
    <PreferencesContext.Provider
      value={{
        initialQuery: 'batman',
        perPage: 10,
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </PreferencesContext.Provider>
  </HashRouter>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister()

// const values = [
//   {type: 'ADD', payload: 1},
//   {type: 'REMOVE', payload: 4},
//   {type: 'CLEAR'},
//   {type: 'REMOVE', payload: 2},
// ]
// const initialState = 0;
//
// const endState = values.reduce((state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return state + action.payload;
//     case 'REMOVE':
//       return state - action.payload;
//     case 'CLEAR':
//       return 0;
//   }
//   return state;
// }, initialState)
