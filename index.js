/**
 * Created by lsyalex on 4/17/2017.
 */
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 8080;

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(express.static(__dirname+ '/public'));

app.get('/',function(req,res){
    res.render('about');
});
app.get('/spending',function(req,res){
    res.render('spending');
});
app.get('/history',function(req,res){
    res.render('history');
});
const mongoose = require('mongoose');
const user = "teampurple";
const password = "123456";
var MongoClient = require('mongodb').MongoClient;
var url='mongodb://' + user + ':' + password + '@ds163020.mlab.com:63020/purple';
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Database Connected.");
});
app.listen(port,function(){
    console.log('app started');
});
