import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { NextUIProvider } from '@nextui-org/react'
import { AuthContextProvider } from './context/AuthContext'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import {thunk} from 'redux-thunk'
import { reducers } from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(reducers, {}, compose(applyMiddleware(thunk)))
root.render(
  // <React.StrictMode>
  <AuthContextProvider>
    <NextUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </NextUIProvider>
  </AuthContextProvider>

  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
