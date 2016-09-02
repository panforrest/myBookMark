import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Entries from '../app/components/container/Entries'
import store from './stores/store'
import { Provider } from 'react-redux'

class App extends Component {
	render() {
		return (
			<div>
                Hello React!
                <Entries />
			</div>

		)
	}
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'))