import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Entries from './components/Entries'

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

ReactDOM.render(<App/>, document.getElementById('app'))