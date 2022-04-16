var express = require("express");
var app = express();
 
 const thirdFunction=  (req, res, next) => {
        res.json(["Tererererony","qweer","sdfsdfsf","Ginger","Food"]);
};
module.exports = thirdFunction;
