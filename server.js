var express = require("express");

//init app
var app = new express();

//use public folder
app.use(express.static("public"));

//make express listen on port 3000
app.listen(3000, function(){
    console.log("Server is running at: http://localhost:3000");
})