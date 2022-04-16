const express = require("express");
const app = express();













app.get('/sid3', (req, res ,next)=>thirdFunction(req, res, next) );





app.listen(3000, () => {
 console.log("Server running on port 3000");

});
