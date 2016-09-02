var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:url', function(req, res, next) {
	var url = req.params.url

	res.json({
		confirmation: 'success',
		url: url
	})
  
});

module.exports = router;