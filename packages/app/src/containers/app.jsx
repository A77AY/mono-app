import React from 'react'
import {Helmet} from 'react-helmet'

export default class App extends React.Component {

    render() {
        return <><Helmet defaultTitle="Title"/><h1>Hello, world</h1></>;
    }
}