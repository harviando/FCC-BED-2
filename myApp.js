let express = require('express');
let app = express();

console.log("Hello World!");

/** Serve "Hello Express String Whenever User request root or "/" " */
app.get("/", (req, res)=>{
    res.send("Hello Express");
});


































 module.exports = app;
