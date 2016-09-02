import React, { Component } from 'react'
import EntryPreview from '../../components/EntryPreview'
import APIManager from '../../../utils/APIManager'

class Entries extends Component {
    constructor(props, context){
    	super(props, context)
    	this.state = {
            entries: [
                // {id:0, title:'My next project', url:'http://www.herePong.com'},
                // {id:1, title:'My following project', url:'http://www.bootCamper.com'}    
            ]
    	}
    }

    componentDidMount(){
        // console.log('componentDidMount: ')
        var _this = this
        APIManager.handleGet('/api/entry', null, function(err, response){
            if (err) {
                alert(err.message)
                return
            }

            console.log('componentDidMount: '+JSON.stringify(response.results))
            var results = response.results
            _this.setState({
                entries: results
            })
        })
    }

    render() {
        var entryList = this.state.entries.map(function(entry, i){
            return <EntryPreview key={entry.id} entry={entry} />
        })


    	return (
    		<div>
    		    This is Entries component!
                {entryList}
    		</div>

    	)
    }
}

export default Entries