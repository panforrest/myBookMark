var express = require('express');
var router = express.Router();
var entryController = require('../controllers/EntryController')
var controllers = {
    entry: entryController
}

router.get('/:resource', function(req, res, next) {
    var resource = req.params.resource

    var controller = controllers[resource]
    if (controller == null){
  	    res.json({
  		      confirmation: 'fail',
  		      entry: 'Invalid resource'
        })

        return
    }

    controller.get(req.query, false, function(err, results){
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'success',
            results: results
        })

        return
    })
});

router.post('/:resource', function(req, res, next) {
    var resource = req.params.resource

    var controller = controllers[resource]
    if (controller == null){
        res.json({
            confirmation: 'fail',
            entry: 'Invalid resource'
        })

        return
    }

    controller.post(req.body, function(err, result){
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'success',
            result: result
        })

        return
    })
});

// router.get('/:resource/:id', function(req, res, next) {

//     var resource = req.params.resource
//     var id = req.params.id

//     if (resource == 'entry'){
//         var entry = data[id]
//   	    res.json({
//   		    confirmation: 'success',
//   		    entry: entry
//         })
//         return
//     }

// });

module.exports = router;