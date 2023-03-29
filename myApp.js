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


































 module.exports = app;
