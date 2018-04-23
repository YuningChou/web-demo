var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname, {'index': 'index_pc.html'}));
app.listen(8181);