
var express = require('express');
var bodyParser = require('body-parser');
var routes = require("./routes/routes.js");
var app = express();

console.log("hello");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.get("/",function)
routes(app);

var server = app.listen(3080, function () {
    console.log("app running on port.", server.address().port);
});