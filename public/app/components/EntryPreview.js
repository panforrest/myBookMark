import React, { Component } from 'react'

class EntryPreview extends Component {



	render(){
		return(
			<div style={{border:'1px solid #ddd', background: '#f9f9f9', padding:16}}>
			    <h3>{this.props.entry.title}</h3>
			    <a href={this.props.entry.url} style={{textDecoration:'none'}} target="_blank">{this.props.entry.url}</a>
			    <p>{this.props.entry.description}</p>
			</div>
		)
	}

}

export default EntryPreview