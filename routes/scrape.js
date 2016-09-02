var express = require('express');
var router = express.Router();
var superagent = require('superagent')
var cheerio = require('cheerio')

/* GET users listing. */
router.get('/:url', function(req, res, next) {
	var url = req.params.url

	// res.json({
	// 	confirmation: 'success',
	// 	url: url
	// })

    superagent
    .get('https://www.youtube.com/watch?v=-1GJQ3c94jQ&feature=youtu.be')
    .query(null)
    .set('Accept', 'text/html')
    .end(function(err, response){
    	if (err) {
    		alert(err)
    		return
    	}

        // res.json(response.text)
        $ = cheerio.load(response.text)
        $('meta').each(function(i){
        	console.log('META: '+i)
        })
    })
  
});

module.exports = router;