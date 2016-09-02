// var mongoose = require('mongoose')
var Entry = require('../models/Entry')
module.exports = {

    get: function(params, isRaw, callback){
    	Entry.find(params, function(err, entries){
    		if (err) {
    			if (callback != null)
    				callback(err, null)
    			return
    		}

    		if (callback != null){
    			callback(null, entries)        //why there is no return below this line?
    		}    

    	})

    },

    post: function(params, callback){
        Entry.create(params, function(err, entry){
        	if (err){
        		if (callback != null)
        			callback(err, null)
        		return
        	}

            if (callback != null){
            	callback(null, entry)
            }

        })

    }





}