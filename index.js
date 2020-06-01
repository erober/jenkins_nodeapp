var express = require('express');
 
var app = express();
//Respond with "hello worl" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello worl');
});



//listen to port 3000 by default
app.listen(3000,()=>{
    console.log("running server on 3000")
});
 
module.exports = app;
