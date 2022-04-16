var express = require("express");
var app = express();
  
 const secondFunction=  (req, res, next) => {
        res.json(["Tererererony","qweer","sdfsdfsf","Ginger","Food"]);
};
module.exports = secondFunction;