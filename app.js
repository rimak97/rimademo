//Required Module
var express=require("express");
var app=express();
var path=require("path");
var bodyparser=require("body-parser");
var routes = require("./routes/routers");

///configure the application
app.set("views", path.join(__dirname, "views")); // "./views"
app.set("view engine", 'jade');

//Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


//routing will be handled by router.js file
app.use('/', routes);

//Start the Server on 3000 Port
app.listen(3000);
console.log("Server Sarted.......");

//Export app Module
module.exports = app;
