var express = require('express');
var router = express.Router();

router.use('/',function(req,res,next){
  console.log('signin');
  next();
})

router.get('/',function(req,res){
  res.send('router suc');
})

module.exports = router;
