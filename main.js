const url = require('url');
var path    = require("path");
var fs = require('fs');


var express = require('express');
var app = express();
var router = require('./router/route')(app,__dirname);


app.use(express.static('public'));




var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});
