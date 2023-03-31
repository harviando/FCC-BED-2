const { json } = require('body-parser');
let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World!");

//installing middleware on the root
app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next()
});

//installing middleware for time fetching
const middleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
};

//testing time request using middleware that handle time
app.get("/now", middleware, (req, res) => {
    res.send({
      time: req.time
    });
});

// Responding to a request with sending a index file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// intercepting the get response with /public folder content addition
app.use("/public", express.static(__dirname + "/public"));

//API to respond with a message when /json is acessed
app.get("/json", function(req, res) {
    console.log(process.env.MESSAGE_STYLE + "<<< style");
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json({
            message: "Hello json".toUpperCase()
        });
    } else {
        res.json({
            message: "Hello json"
        });
    }
});

































 module.exports = app;
