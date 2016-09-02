import React, { Component } from 'react'
import EntryPreview from '../../components/EntryPreview'

class Entries extends Component {
    constructor(props, context){
    	super(props, context)
    	this.state = {
            entries: [
                {id:0, title:'My next project', url:'http://www.herePong.com'},
                {id:1, title:'My following project', url:'http://www.bootCamper.com'}    
            ]
    	}
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