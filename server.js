var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.use('/', express.static('_book')); // ← adjust
app.listen(port, function() { console.log('listening'); });