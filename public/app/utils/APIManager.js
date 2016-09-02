import superagent from 'superagent'

export default {

    handleGet: function(endpoint, params, completion){
    	superagent
        .get(endpoint)
        .query(params)
        .set('Accept', 'application/json')
        .end(function(err, res){
        	if (completion == null)
        		return

        	if (err) {
        		completion(err, null)
        		return
        	}

        	if (res.body.confirmation == 'success')
        		completion(null, res.body)
        	else
        		completion({message:res.body.message}, null)
        })
    },

    handlePost: function(endpoint, body, completion){
    	superagent
        .post(endpoint)
        .send(body)
        .set('Accept', 'application/json')
        .end(function(err, res){
        	if (completion == null)
        		return

        	if (err) {
        		completion(err, null)
        		return
        	}

        	if (res.body.confirmation == 'success')
        		completion(null, res.body)
        	else
        		completion({message:res.body.message}, null)
        })
    }
}