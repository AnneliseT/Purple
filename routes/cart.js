var express = require('express');
var router = express.Router();

router.get('/cartlist', function(req, res) {
    var db = req.db;
    var collection = db.get('cart');
    console.log(collection.find());
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});
router.post('/add',function(req,res){
    "use strict";
    var db = req.db;
    var collection = db.get('cart');
    collection.insert(req.body, function(err,result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
