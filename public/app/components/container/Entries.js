import React, { Component } from 'react'
import EntryPreview from '../../components/EntryPreview'
import APIManager from '../../utils/APIManager'

import actions from '../../actions/actions'
import store from '../../stores/store'
import { connect } from 'react-redux'
import entresReducer from '../../reducers/entriesReducer'

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

            // console.log('componentDidMount: '+JSON.stringify(response.results))
            // var results = response.results
            // _this.setState({
            //     entries: results
            // })
            store.dispatch(actions.entriesReceived(response.results))
        })





    }

    render() {

        var entryList = this.props.entries.map(function(entry, i){
            return <EntryPreview key={entry._id} entry={entry} />

        })


    	return (
    		<div>
    		    This is Entries component!
                {entryList}
    		</div>

    	)


    }


}

const stateToProps = function(state){

    return {
        entries: state.entriesReducer.entriesArray
    }
}

export default connect(stateToProps)(Entries)