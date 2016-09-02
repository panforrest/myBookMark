import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import Main from './components/Main'
import store from './stores/store'
import { Provider } from 'react-redux'

class ServerApp extends Component {
	render() {
		return (
            <Provider store={store}>
                <Main />
            </Provider>

		)
	}
}

export default ServerApp