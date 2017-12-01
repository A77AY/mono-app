import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'

ReactDOM.hydrate(
    <App/>,
    document.getElementById('root')
);