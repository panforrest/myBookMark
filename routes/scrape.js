var express = require('express');
var router = express.Router();
var superagent = require('superagent')
var cheerio = require('cheerio')

/* GET users listing. */
router.get('/:url', function(req, res, next) {
	var url = req.params.url


    superagent
    .get('https://www.youtube.com/watch?v=-1GJQ3c94jQ&feature=youtu.be')
    .query(null)
    .set('Accept', 'text/html')
    .end(function(err, response){
    	if (err) {
    		return
    	}

        // res.json(response.text)
        var props = ['og:title', 'og:description', 'og:image']
        var metaData = {}
        $ = cheerio.load(response.text)
        $('meta').each(function(i, meta){
            if (meta.attribs != null){
            	var attribs = meta.attribs
            	if (attribs.property != null) {
            		var prop = attribs.property
            		if (props.indexOf(prop) != -1){

            			var key = prop.replace('og:', '')
            			metaData[key] = attribs.content
            		} 
            	}
            }
        })

        console.log(JSON.stringify(metaData))
        res.json(metaData)
    })

  
});

module.exports = router;