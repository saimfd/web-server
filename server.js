const express = require('express');
var app = express();
var port = 3000;

var middleware = {
  requireAuth : function(req, res, next){
    console.log("Private Route hit");
    next()
  },
  logger: function(req, res, next){
    var date = new Date();
    console.log('Date: ' + date.toString());
    console.log('Request: ' + req.method + ' ' + req.originalUrl);
    next()
  }
}

app.use(middleware.logger)
// app.use(middleware.requireAuth)
app.get('/about', middleware.requireAuth, function(req, res){
  res.send('About Page');
})

app.use(express.static(__dirname + "/public"))
// console.log(__dirname);
app.listen(port, function(){
  console.log("Server started on port: " + port)
})
