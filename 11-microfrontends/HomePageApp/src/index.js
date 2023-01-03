import '@babel/polyfill' // to make webpack work with async stuff
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))
