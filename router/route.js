const url = require('url');
const path = require('path');

module.exports = function(req,res)
{
  app.get('/login',function(req,res){
    queryString=url.parse(req.url,true).query
    console.log(queryString);
    console.log(dirname);

    res.sendFile(path.join(dirname+'/public/login_main.html'));
  });

}
