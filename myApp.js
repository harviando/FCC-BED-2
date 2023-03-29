let express = require('express');
let app = express();

console.log("Hello World!");

// /** Serve "Hello Express String Whenever User request root or "/" " */
// app.get("/", (req, res)=>{
//     res.send("Hello Express");
// });


// Responding to a request with sending a index file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// intercepting the get response with /public folder content addition
app.use("/public", express.static(__dirname + "/public"));

//API to respond with a message when /json is acessed
app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
});
































 module.exports = app;
