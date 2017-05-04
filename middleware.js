module.exports = {
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
