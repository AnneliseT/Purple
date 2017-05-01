/**
 * Created by lsyalex on 4/17/2017.
 */
var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cart = require('./routes/cart'),
    user = require('./routes/user'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    app = express(),
    port = 8080,
    mongo = require('mongodb'),
    db = require('monk')('localhost:27017/purple'),
    cartlist = db.get('cart'),
    userlist=db.get('userlist')
    ;
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(function (req, res, next) {
    req.db = db;
    console.log(db.showdatabase);
    next();
});

app.get('/', function (req, res) {
    res.render('about');
});

app.get('/about', function (req, res) {
    res.render('about');
});

// app.get('/login',function(req,res){
//   res.sendFile(path.join(__dirname+'/login.html'));
// });


app.get('/history',function(req,res){
    res.render('history');
});
app.use('/user', user);
app.get('/cart', function (req, res) {
    res.render('cart');
});
app.get('/spending', function (req, res) {
    res.render('spending');
});

app.get('/login', function (req, res) {
      res.render('login');
    });

app.get('/bar', function (req, res) {
            res.render('bar');
          });

app.get('/pie', function (req, res) {
        res.render('pie');
      });

      // app.get('/history', function (req, res) {
      //     res.render('history');
      //   });
      // app.get('/login',function(req,res){
      //   res.sendFile(path.join(__dirname+'/login.html'));
      // });

app.use(express.static(__dirname + '/public'));
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
