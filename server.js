const url = require('url');
var path    = require("path");
var fs = require('fs');

var express = require('express');
var app = express();
// var  = require('./router/');
var  index = require('./router/index');
var signin = require('./router/signin');
var  main= require('./router/main');
var  signup= require('./router/signup');
var  selectbook= require('./router/selectbook');
var  mybook= require('./router/mybook');



app.use(express.static(path.join(__dirname,'public')));
app.use('/index',index);
app.use('/signin',signin);
app.use('/signup',signup);
app.use('/main',main);
app.use('/selectbook',selectbook);
app.use('/mybook',mybook);


var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});
