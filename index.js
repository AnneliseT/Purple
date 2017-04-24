/**
 * Created by lsyalex on 4/17/2017.
 */
var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    users = require('./routes/user'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    app = express(),
    port = 8080,
    mongo = require('mongodb'),
    monk = require('monk'),
    url = 'localhost:27017/purple',
    db = monk(url);


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.get('/', function (req, res) {
    res.render('about');
});
app.use('/users', users);
app.get('/cart', function (req, res) {
    res.render('cart');
})
app.get('/spending', function (req, res) {
    res.render('spending');
});
app.get('/history', function (req, res) {
    res.render('history');
});


/*
 const mongoose = require('mongoose');
 const user = "teampurple";
 const password = "123456";
 var url='mongodb://' + user + ':' + password + '@ds163020.mlab.com:63020/purple';
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function () {
 console.log("Database Connected.");
 });
 */

app.listen(port, function () {
    console.log('app started');
});
