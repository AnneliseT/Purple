/**
 * Created by lsyalex on 4/17/2017.
 */
var express = require('express');
var app = express();
var port = 8080;

var router = require(__dirname+ '/app/routes');
app.use('/',router);

app.use(express.static(__dirname + '/public'));

app.listen(port,function(){
    console.log('app started');
});