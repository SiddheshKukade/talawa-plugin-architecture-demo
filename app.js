var express = require("express");
var app = express();

const thirdFunction = require('./plugins/third.js/third.js')




app.get('/sid3', (req, res ,next)=>thirdFunction(req, res, next) );






app.listen(3000, () => {

 console.log("Server running on port 3000");
});
