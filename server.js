// server.js
// grab the packages
var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 8080;

// tell express where to look for static files
app.use(express.static(__dirname));

// the main route 
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));  
});

// start the server
app.listen(8080);
console.log('Magic happens on port 8080!');