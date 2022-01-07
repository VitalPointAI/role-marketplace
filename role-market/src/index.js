import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { initContract } from './utils'

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <App style='background-color: #302d2d'/>,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
