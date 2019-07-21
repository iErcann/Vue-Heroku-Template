  
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const cors = require("cors")

var bodyParser = require('body-parser')

app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(cors())
 


app.get("/api/topics", (req, res) => {
    res.send({e: "a"})    
})


app.use(serveStatic(path.join(__dirname, 'dist')));


const port = process.env.PORT || 5000;
app.listen(port);
