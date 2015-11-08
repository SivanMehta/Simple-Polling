var express = require("express");
var morgan = require('morgan');

var app = express();
app.use(morgan('tiny'));

// load the routes
require('./routes/poll.js').init(app);
app.use(express.static(__dirname + '/public'));

app.listen(50000);

console.log("Server listening at http://localhost:50000/");
