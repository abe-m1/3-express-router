//1. load express and create app
var express  = require('express');
var app      = express();



//2. get an instance of the router
var router = express.Router();


//3. define the routes
router.route('/users')

  //4 post request
  .post(function(req, res) {
    res.send('this route will post to user')
  })

  //5 get request
  .get(function(req, res) {
    res.send('this route will get the users')
  })


//6 apply router to the app 
 app.use(router) 


 //7 start the server
 app.listen(1337, function(req, res){
  console.log('listening on port 1337')
 });