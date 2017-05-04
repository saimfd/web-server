const express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var middleware = require('./middleware.js')
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
