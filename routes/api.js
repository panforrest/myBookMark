var express = require('express');
var router = express.Router();

var data = [
    {id:0, title: "First Entry", text: "First Entry text"},
    {id:1, title: "Second Entry", text: "Second Entry text"},
]

/* GET api page. */
router.get('/:resource', function(req, res, next) {

    var resource = req.params.resource

    if (resource == 'entry'){

  	    res.json({
  		    confirmation: 'success',
  		    entry: data
        })
        return
    }

});

router.get('/:resource/:id', function(req, res, next) {

    var resource = req.params.resource
    var id = req.params.id

    if (resource == 'entry'){
        var entry = data[id]
  	    res.json({
  		    confirmation: 'success',
  		    entry: entry
        })
        return
    }

});

module.exports = router;